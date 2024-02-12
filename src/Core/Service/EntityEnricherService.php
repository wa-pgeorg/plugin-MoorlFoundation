<?php

namespace MoorlFoundation\Core\Service;

use Shopware\Core\Content\Media\Aggregate\MediaThumbnail\MediaThumbnailCollection;
use Shopware\Core\Content\Media\Aggregate\MediaThumbnail\MediaThumbnailEntity;
use Shopware\Core\Content\Media\MediaEntity;
use Shopware\Core\Content\Product\SalesChannel\Price\AbstractProductPriceCalculator;
use Shopware\Core\Content\Product\SalesChannel\SalesChannelProductEntity;
use Shopware\Core\Framework\Context;
use Shopware\Core\Framework\DataAbstractionLayer\DefinitionInstanceRegistry;
use Shopware\Core\System\SalesChannel\SalesChannelContext;
use Shopware\Core\System\SystemConfig\SystemConfigService;

class EntityEnricherService
{
    private ?Context $context = null;
    private ?SalesChannelContext $salesChannelContext = null;

    public function __construct(
        private readonly DefinitionInstanceRegistry $definitionInstanceRegistry,
        private readonly SystemConfigService $systemConfigService,
        private readonly AbstractProductPriceCalculator $productPriceCalculator
    )
    {
    }

    public function setContext(?Context $context): void
    {
        $this->context = $context;
    }

    public function enrichSalesChannelProduct(?SalesChannelProductEntity $product = null): void
    {
        if (!$product) {
            return;
        }

        if (!$this->salesChannelContext) {
            return;
        }

        $this->productPriceCalculator->calculate([$product], $this->salesChannelContext);

        $cover = $product->getCover();
        if (!$cover || !$cover->getMedia()) {
            return;
        }

        $this->enrichMedia($cover->getMedia());
    }

    public function enrichMedia(?MediaEntity $media = null): void
    {
        if (!$media) {
            return;
        }

        if ($media->getMediaTypeRaw()) {
            $media->setMediaType(unserialize($media->getMediaTypeRaw()));
        }

        if ($media->getThumbnails() === null) {
            if ($media->getThumbnailsRo()) {
                $media->setThumbnails(unserialize($media->getThumbnailsRo()));
            } else {
                $media->setThumbnails(new MediaThumbnailCollection());
            }
        }

        if (!$media->hasFile() || $media->isPrivate()) {
            return;
        }

        foreach ($media->getThumbnails() as $thumbnail) {
            $this->addThumbnailUrl($thumbnail, $media);
        }
    }

    private function addThumbnailUrl(MediaThumbnailEntity $thumbnail, MediaEntity $media): void
    {
    }

    public function setSalesChannelContext(?SalesChannelContext $salesChannelContext): void
    {
        $this->salesChannelContext = $salesChannelContext;
        $this->context = $salesChannelContext->getContext();
    }
}
