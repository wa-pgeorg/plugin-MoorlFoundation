const MoorlFoundation = function MoorlFoundation() {
    this.listingLayout = [
        {value: 'grid', label: 'sw-cms.elements.moorl-foundation-listing.listingLayout.grid'},
        {value: 'list', label: 'sw-cms.elements.moorl-foundation-listing.listingLayout.list'},
        {value: 'standard', label: 'sw-cms.elements.moorl-foundation-listing.listingLayout.standard'},
        {value: 'slider', label: 'sw-cms.elements.moorl-foundation-listing.listingLayout.slider'}
    ];
    this.itemLayout = [
        {value: 'overlay', label: 'sw-cms.elements.moorl-foundation-listing.itemLayout.overlay'},
        {value: 'image-or-title', label: 'sw-cms.elements.moorl-foundation-listing.itemLayout.image-or-title'},
        {value: 'image-content', label: 'sw-cms.elements.moorl-foundation-listing.itemLayout.image-content'},
        {value: 'content-image', label: 'sw-cms.elements.moorl-foundation-listing.itemLayout.content-image'},
        {value: 'avatar', label: 'sw-cms.elements.moorl-foundation-listing.itemLayout.avatar'},
        {value: 'standard', label: 'sw-cms.elements.moorl-foundation-listing.itemLayout.standard'},
        {value: 'custom', label: 'sw-cms.elements.moorl-foundation-listing.itemLayout.custom'}
    ];
    this.displayMode = [
        {value: 'cover', label: 'sw-cms.elements.moorl-foundation-listing.displayMode.cover'},
        {value: 'contain', label: 'sw-cms.elements.moorl-foundation-listing.displayMode.contain'},
        {value: 'standard', label: 'sw-cms.elements.moorl-foundation-listing.displayMode.standard'}
    ];
    this.mode = [
        {value: 'carousel', label: 'sw-cms.elements.moorl-foundation-listing.mode.carousel'},
        {value: 'gallery', label: 'sw-cms.elements.moorl-foundation-listing.mode.gallery'}
    ];
    this.navigationArrows = [
        {value: null, label: 'sw-cms.elements.moorl-foundation-listing.none'},
        {value: 'outside', label: 'sw-cms.elements.moorl-foundation-listing.navigationArrows.outside'},
        {value: 'inside', label: 'sw-cms.elements.moorl-foundation-listing.navigationArrows.inside'}
    ];
    this.navigationDots = [
        {value: null, label: 'sw-cms.elements.moorl-foundation-listing.none'},
        {value: 'outside', label: 'sw-cms.elements.moorl-foundation-listing.navigationDots.outside'},
        {value: 'inside', label: 'sw-cms.elements.moorl-foundation-listing.navigationDots.inside'}
    ];
    this.colorScheme = [
        {value: 'primary', label: 'moorl-cms.elements.general.config.label.btnPrimary'},
        {value: 'danger', label: 'moorl-cms.elements.general.config.label.btnDanger'},
        {value: 'success', label: 'moorl-cms.elements.general.config.label.btnSuccess'},
        {value: 'warning', label: 'moorl-cms.elements.general.config.label.btnWarning'},
        {value: 'info', label: 'moorl-cms.elements.general.config.label.btnInfo'},
        {value: 'dark', label: 'moorl-cms.elements.general.config.label.btnDark'},
        {value: 'light', label: 'moorl-cms.elements.general.config.label.btnLight'},
        {value: 'facebook', label: 'moorl-cms.elements.general.config.label.btnFacebook'},
        {value: 'twitter', label: 'moorl-cms.elements.general.config.label.btnTwitter'},
        {value: 'google', label: 'moorl-cms.elements.general.config.label.btnGoogle'},
        {value: 'shopware', label: 'moorl-cms.elements.general.config.label.btnShopware'}
    ];
    this.btnClass = [
        {value: 'btn-primary', label: 'moorl-cms.elements.general.config.label.btnPrimary'},
        {value: 'btn-outline-primary', label: 'moorl-cms.elements.general.config.label.btnPrimaryOutline'},
        {value: 'btn-danger', label: 'moorl-cms.elements.general.config.label.btnDanger'},
        {value: 'btn-outline-danger', label: 'moorl-cms.elements.general.config.label.btnDangerOutline'},
        {value: 'btn-success', label: 'moorl-cms.elements.general.config.label.btnSuccess'},
        {value: 'btn-outline-success', label: 'moorl-cms.elements.general.config.label.btnSuccessOutline'},
        {value: 'btn-warning', label: 'moorl-cms.elements.general.config.label.btnWarning'},
        {value: 'btn-outline-warning', label: 'moorl-cms.elements.general.config.label.btnWarningOutline'},
        {value: 'btn-info', label: 'moorl-cms.elements.general.config.label.btnInfo'},
        {value: 'btn-outline-info', label: 'moorl-cms.elements.general.config.label.btnInfoOutline'},
        {value: 'btn-dark', label: 'moorl-cms.elements.general.config.label.btnDark'},
        {value: 'btn-outline-dark', label: 'moorl-cms.elements.general.config.label.btnDarkOutline'},
        {value: 'btn-link', label: 'moorl-cms.elements.general.config.label.btnLink'}
    ];
    this.verticalAlign = [
        {value: 'flex-start', label: 'moorl-cms.elements.general.config.label.top'},
        {value: 'center', label: 'moorl-cms.elements.general.config.label.center'},
        {value: 'flex-end', label: 'moorl-cms.elements.general.config.label.bottom'}
    ];
    this.horizontalAlign = [
        {value: 'flex-start', label: 'moorl-cms.elements.general.config.label.left'},
        {value: 'center', label: 'moorl-cms.elements.general.config.label.center'},
        {value: 'flex-end', label: 'moorl-cms.elements.general.config.label.right'}
    ];
    this.textAlign = [
        {value: 'left', label: 'moorl-cms.elements.general.config.label.left'},
        {value: 'center', label: 'moorl-cms.elements.general.config.label.center'},
        {value: 'right', label: 'moorl-cms.elements.general.config.label.right'}
    ];
    this.verticalTextAlign = [
        {value: 'top', label: 'moorl-cms.elements.general.config.label.top'},
        {value: 'center', label: 'moorl-cms.elements.general.config.label.center'},
        {value: 'bottom', label: 'moorl-cms.elements.general.config.label.bottom'}
    ];
    this.animateCss = [
        {
            optgroup: '-',
            options: [
                'disable',
                'none'
            ]
        },
        {
            optgroup: 'Attention Seekers',
            options: [
                'bounce',
                'flash',
                'pulse',
                'rubberBand',
                'shake',
                'swing',
                'tada',
                'wobble',
                'jello',
                'heartBeat',
            ]
        },
        {
            optgroup: 'Bouncing Entrances',
            options: [
                'bounceIn',
                'bounceInDown',
                'bounceInLeft',
                'bounceInRight',
                'bounceInUp',
            ]
        },
        {
            optgroup: 'Bouncing Exits',
            options: [
                'bounceOut',
                'bounceOutDown',
                'bounceOutLeft',
                'bounceOutRight',
                'bounceOutUp',
            ]
        },
        {
            optgroup: 'Fading Entrances',
            options: [
                'fadeIn',
                'fadeInDown',
                'fadeInDownBig',
                'fadeInLeft',
                'fadeInLeftBig',
                'fadeInRight',
                'fadeInRightBig',
                'fadeInUp',
                'fadeInUpBig',
            ]
        },
        {
            optgroup: 'Fading Exits',
            options: [
                'fadeOut',
                'fadeOutDown',
                'fadeOutDownBig',
                'fadeOutLeft',
                'fadeOutLeftBig',
                'fadeOutRight',
                'fadeOutRightBig',
                'fadeOutUp',
                'fadeOutUpBig',
            ]
        },
        {
            optgroup: 'Flippers',
            options: [
                'flip',
                'flipInX',
                'flipInY',
                'flipOutX',
                'flipOutY',
            ]
        },
        {
            optgroup: 'Lightspeed',
            options: [
                'lightSpeedIn',
                'lightSpeedOut',
            ]
        },
        {
            optgroup: 'Rotating Entrances',
            options: [
                'rotateIn',
                'rotateInDownLeft',
                'rotateInDownRight',
                'rotateInUpLeft',
                'rotateInUpRight',
            ]
        },
        {
            optgroup: 'Rotating Exits',
            options: [
                'rotateOut',
                'rotateOutDownLeft',
                'rotateOutDownRight',
                'rotateOutUpLeft',
                'rotateOutUpRight',
            ]
        },
        {
            optgroup: 'Sliding Entrances',
            options: [
                'slideInUp',
                'slideInDown',
                'slideInLeft',
                'slideInRight',
            ]
        },
        {
            optgroup: 'Sliding Exits',
            options: [
                'slideOutUp',
                'slideOutDown',
                'slideOutLeft',
                'slideOutRight',
            ]
        },
        {
            optgroup: 'Zoom Entrances',
            options: [
                'zoomIn',
                'zoomInDown',
                'zoomInLeft',
                'zoomInRight',
                'zoomInUp',
            ]
        },
        {
            optgroup: 'Zoom Exits',
            options: [
                'zoomOut',
                'zoomOutDown',
                'zoomOutLeft',
                'zoomOutRight',
                'zoomOutUp',
            ]
        },
        {
            optgroup: 'Specials',
            options: [
                'hinge',
                'jackInTheBox',
                'rollIn',
                'rollOut',
            ]
        }
    ];
    this.iconClass = [
        {
            "value": "fab|elementor",
            "label": "Elementor"
        },
        {
            "value": "fas|eject",
            "label": "eject"
        },
        {
            "value": "fas|egg",
            "label": "Egg"
        },
        {
            "value": "fas|edit",
            "label": "Edit"
        },
        {
            "value": "far|edit",
            "label": "Edit"
        },
        {
            "value": "fab|edge",
            "label": "Edge Browser"
        },
        {
            "value": "fab|ebay",
            "label": "eBay"
        },
        {
            "value": "fab|earlybirds",
            "label": "Earlybirds"
        },
        {
            "value": "fab|dyalog",
            "label": "Dyalog"
        },
        {
            "value": "fas|dungeon",
            "label": "Dungeon"
        },
        {
            "value": "fas|dumpster-fire",
            "label": "Dumpster Fire"
        },
        {
            "value": "fas|dumpster",
            "label": "Dumpster"
        },
        {
            "value": "fas|dumbbell",
            "label": "Dumbbell"
        },
        {
            "value": "fab|drupal",
            "label": "Drupal Logo"
        },
        {
            "value": "fas|drumstick-bite",
            "label": "Drumstick with Bite Taken Out"
        },
        {
            "value": "fas|drum-steelpan",
            "label": "Drum Steelpan"
        },
        {
            "value": "fas|drum",
            "label": "Drum"
        },
        {
            "value": "fab|dropbox",
            "label": "Dropbox"
        },
        {
            "value": "fab|dribbble-square",
            "label": "Dribbble Square"
        },
        {
            "value": "fab|dribbble",
            "label": "Dribbble"
        },
        {
            "value": "fas|draw-polygon",
            "label": "Draw Polygon"
        },
        {
            "value": "fas|dragon",
            "label": "Dragon"
        },
        {
            "value": "fas|drafting-compass",
            "label": "Drafting Compass"
        },
        {
            "value": "fab|draft2digital",
            "label": "Draft2digital"
        },
        {
            "value": "fas|download",
            "label": "Download"
        },
        {
            "value": "fas|dove",
            "label": "Dove"
        },
        {
            "value": "fas|dot-circle",
            "label": "Dot Circle"
        },
        {
            "value": "far|dot-circle",
            "label": "Dot Circle"
        },
        {
            "value": "fas|door-open",
            "label": "Door Open"
        },
        {
            "value": "fas|door-closed",
            "label": "Door Closed"
        },
        {
            "value": "fas|donate",
            "label": "Donate"
        },
        {
            "value": "fas|dolly-flatbed",
            "label": "Dolly Flatbed"
        },
        {
            "value": "fas|dolly",
            "label": "Dolly"
        },
        {
            "value": "fas|dollar-sign",
            "label": "Dollar Sign"
        },
        {
            "value": "fas|dog",
            "label": "Dog"
        },
        {
            "value": "fab|docker",
            "label": "Docker"
        },
        {
            "value": "fab|dochub",
            "label": "DocHub"
        },
        {
            "value": "fas|dna",
            "label": "DNA"
        },
        {
            "value": "fas|dizzy",
            "label": "Dizzy Face"
        },
        {
            "value": "far|dizzy",
            "label": "Dizzy Face"
        },
        {
            "value": "fas|divide",
            "label": "Divide"
        },
        {
            "value": "fab|discourse",
            "label": "Discourse"
        },
        {
            "value": "fab|discord",
            "label": "Discord"
        },
        {
            "value": "fas|directions",
            "label": "Directions"
        },
        {
            "value": "fas|digital-tachograph",
            "label": "Digital Tachograph"
        },
        {
            "value": "fab|digital-ocean",
            "label": "Digital Ocean"
        },
        {
            "value": "fab|digg",
            "label": "Digg Logo"
        },
        {
            "value": "fas|dice-two",
            "label": "Dice Two"
        },
        {
            "value": "fas|dice-three",
            "label": "Dice Three"
        },
        {
            "value": "fas|dice-six",
            "label": "Dice Six"
        },
        {
            "value": "fas|dice-one",
            "label": "Dice One"
        },
        {
            "value": "fas|dice-four",
            "label": "Dice Four"
        },
        {
            "value": "fas|dice-five",
            "label": "Dice Five"
        },
        {
            "value": "fas|dice-d6",
            "label": "Dice D6"
        },
        {
            "value": "fas|dice-d20",
            "label": "Dice D20"
        },
        {
            "value": "fas|dice",
            "label": "Dice"
        },
        {
            "value": "fab|diaspora",
            "label": "Diaspora"
        },
        {
            "value": "fas|diagnoses",
            "label": "Diagnoses"
        },
        {
            "value": "fab|dhl",
            "label": "DHL"
        },
        {
            "value": "fas|dharmachakra",
            "label": "Dharmachakra"
        },
        {
            "value": "fab|deviantart",
            "label": "deviantART"
        },
        {
            "value": "fab|dev",
            "label": "DEV"
        },
        {
            "value": "fas|desktop",
            "label": "Desktop"
        },
        {
            "value": "fab|deskpro",
            "label": "Deskpro"
        },
        {
            "value": "fab|deploydog",
            "label": "deploy.dog"
        },
        {
            "value": "fas|democrat",
            "label": "Democrat"
        },
        {
            "value": "fab|delicious",
            "label": "Delicious"
        },
        {
            "value": "fas|deaf",
            "label": "Deaf"
        },
        {
            "value": "fas|database",
            "label": "Database"
        },
        {
            "value": "fab|dashcube",
            "label": "DashCube"
        },
        {
            "value": "fab|dailymotion",
            "label": "dailymotion"
        },
        {
            "value": "fab|d-and-d-beyond",
            "label": "D&D Beyond"
        },
        {
            "value": "fab|d-and-d",
            "label": "Dungeons & Dragons"
        },
        {
            "value": "fab|cuttlefish",
            "label": "Cuttlefish"
        },
        {
            "value": "fas|cut",
            "label": "Cut"
        },
        {
            "value": "fas|cubes",
            "label": "Cubes"
        },
        {
            "value": "fas|cube",
            "label": "Cube"
        },
        {
            "value": "fab|css3-alt",
            "label": "Alternate CSS3 Logo"
        },
        {
            "value": "fab|css3",
            "label": "CSS 3 Logo"
        },
        {
            "value": "fas|crutch",
            "label": "Crutch"
        },
        {
            "value": "fas|crown",
            "label": "Crown"
        },
        {
            "value": "fas|crow",
            "label": "Crow"
        },
        {
            "value": "fas|crosshairs",
            "label": "Crosshairs"
        },
        {
            "value": "fas|cross",
            "label": "Cross"
        },
        {
            "value": "fas|crop-alt",
            "label": "Alternate Crop"
        },
        {
            "value": "fas|crop",
            "label": "crop"
        },
        {
            "value": "fab|critical-role",
            "label": "Critical Role"
        },
        {
            "value": "fas|credit-card",
            "label": "Credit Card"
        },
        {
            "value": "far|credit-card",
            "label": "Credit Card"
        },
        {
            "value": "fab|creative-commons-zero",
            "label": "Creative Commons CC0"
        },
        {
            "value": "fab|creative-commons-share",
            "label": "Creative Commons Share"
        },
        {
            "value": "fab|creative-commons-sampling-plus",
            "label": "Creative Commons Sampling +"
        },
        {
            "value": "fab|creative-commons-sampling",
            "label": "Creative Commons Sampling"
        },
        {
            "value": "fab|creative-commons-sa",
            "label": "Creative Commons Share Alike"
        },
        {
            "value": "fab|creative-commons-remix",
            "label": "Creative Commons Remix"
        },
        {
            "value": "fab|creative-commons-pd-alt",
            "label": "Alternate Creative Commons Public Domain"
        },
        {
            "value": "fab|creative-commons-pd",
            "label": "Creative Commons Public Domain"
        },
        {
            "value": "fab|creative-commons-nd",
            "label": "Creative Commons No Derivative Works"
        },
        {
            "value": "fab|creative-commons-nc-jp",
            "label": "Creative Commons Noncommercial (Yen Sign)"
        },
        {
            "value": "fab|creative-commons-nc-eu",
            "label": "Creative Commons Noncommercial (Euro Sign)"
        },
        {
            "value": "fab|creative-commons-nc",
            "label": "Creative Commons Noncommercial"
        },
        {
            "value": "fab|creative-commons-by",
            "label": "Creative Commons Attribution"
        },
        {
            "value": "fab|creative-commons",
            "label": "Creative Commons"
        },
        {
            "value": "fab|cpanel",
            "label": "cPanel"
        },
        {
            "value": "fas|couch",
            "label": "Couch"
        },
        {
            "value": "fab|cotton-bureau",
            "label": "Cotton Bureau"
        },
        {
            "value": "fas|copyright",
            "label": "Copyright"
        },
        {
            "value": "far|copyright",
            "label": "Copyright"
        },
        {
            "value": "fas|copy",
            "label": "Copy"
        },
        {
            "value": "far|copy",
            "label": "Copy"
        },
        {
            "value": "fas|cookie-bite",
            "label": "Cookie Bite"
        },
        {
            "value": "fas|cookie",
            "label": "Cookie"
        },
        {
            "value": "fab|contao",
            "label": "Contao"
        },
        {
            "value": "fab|connectdevelop",
            "label": "Connect Develop"
        },
        {
            "value": "fab|confluence",
            "label": "Confluence"
        },
        {
            "value": "fas|concierge-bell",
            "label": "Concierge Bell"
        },
        {
            "value": "fas|compress-arrows-alt",
            "label": "Alternate Compress Arrows"
        },
        {
            "value": "fas|compress-alt",
            "label": "Alternate Compress"
        },
        {
            "value": "fas|compress",
            "label": "Compress"
        },
        {
            "value": "fas|compass",
            "label": "Compass"
        },
        {
            "value": "far|compass",
            "label": "Compass"
        },
        {
            "value": "fas|compact-disc",
            "label": "Compact Disc"
        },
        {
            "value": "fas|comments-dollar",
            "label": "Comments Dollar"
        },
        {
            "value": "fas|comments",
            "label": "comments"
        },
        {
            "value": "far|comments",
            "label": "comments"
        },
        {
            "value": "fas|comment-slash",
            "label": "Comment Slash"
        },
        {
            "value": "fas|comment-medical",
            "label": "Alternate Medical Chat"
        },
        {
            "value": "fas|comment-dots",
            "label": "Comment Dots"
        },
        {
            "value": "far|comment-dots",
            "label": "Comment Dots"
        },
        {
            "value": "fas|comment-dollar",
            "label": "Comment Dollar"
        },
        {
            "value": "fas|comment-alt",
            "label": "Alternate Comment"
        },
        {
            "value": "far|comment-alt",
            "label": "Alternate Comment"
        },
        {
            "value": "fas|comment",
            "label": "comment"
        },
        {
            "value": "far|comment",
            "label": "comment"
        },
        {
            "value": "fas|columns",
            "label": "Columns"
        },
        {
            "value": "fas|coins",
            "label": "Coins"
        },
        {
            "value": "fas|cogs",
            "label": "cogs"
        },
        {
            "value": "fas|cog",
            "label": "cog"
        },
        {
            "value": "fas|coffee",
            "label": "Coffee"
        },
        {
            "value": "fab|codiepie",
            "label": "Codie Pie"
        },
        {
            "value": "fab|codepen",
            "label": "Codepen"
        },
        {
            "value": "fas|code-branch",
            "label": "Code Branch"
        },
        {
            "value": "fas|code",
            "label": "Code"
        },
        {
            "value": "fas|cocktail",
            "label": "Cocktail"
        },
        {
            "value": "fab|cloudversify",
            "label": "cloudversify"
        },
        {
            "value": "fab|cloudsmith",
            "label": "Cloudsmith"
        },
        {
            "value": "fab|cloudscale",
            "label": "cloudscale.ch"
        },
        {
            "value": "fas|cloud-upload-alt",
            "label": "Alternate Cloud Upload"
        },
        {
            "value": "fas|cloud-sun-rain",
            "label": "Cloud with Sun and Rain"
        },
        {
            "value": "fas|cloud-sun",
            "label": "Cloud with Sun"
        },
        {
            "value": "fas|cloud-showers-heavy",
            "label": "Cloud with Heavy Showers"
        },
        {
            "value": "fas|cloud-rain",
            "label": "Cloud with Rain"
        },
        {
            "value": "fas|cloud-moon-rain",
            "label": "Cloud with Moon and Rain"
        },
        {
            "value": "fas|cloud-moon",
            "label": "Cloud with Moon"
        },
        {
            "value": "fas|cloud-meatball",
            "label": "Cloud with (a chance of) Meatball"
        },
        {
            "value": "fas|cloud-download-alt",
            "label": "Alternate Cloud Download"
        },
        {
            "value": "fas|cloud",
            "label": "Cloud"
        },
        {
            "value": "fas|closed-captioning",
            "label": "Closed Captioning"
        },
        {
            "value": "far|closed-captioning",
            "label": "Closed Captioning"
        },
        {
            "value": "fas|clone",
            "label": "Clone"
        },
        {
            "value": "far|clone",
            "label": "Clone"
        },
        {
            "value": "fas|clock",
            "label": "Clock"
        },
        {
            "value": "far|clock",
            "label": "Clock"
        },
        {
            "value": "fas|clipboard-list",
            "label": "Clipboard List"
        },
        {
            "value": "fas|clipboard-check",
            "label": "Clipboard with Check"
        },
        {
            "value": "fas|clipboard",
            "label": "Clipboard"
        },
        {
            "value": "far|clipboard",
            "label": "Clipboard"
        },
        {
            "value": "fas|clinic-medical",
            "label": "Medical Clinic"
        },
        {
            "value": "fas|city",
            "label": "City"
        },
        {
            "value": "fas|circle-notch",
            "label": "Circle Notched"
        },
        {
            "value": "fas|circle",
            "label": "Circle"
        },
        {
            "value": "far|circle",
            "label": "Circle"
        },
        {
            "value": "fas|church",
            "label": "Church"
        },
        {
            "value": "fab|chromecast",
            "label": "Chromecast"
        },
        {
            "value": "fab|chrome",
            "label": "Chrome"
        },
        {
            "value": "fas|child",
            "label": "Child"
        },
        {
            "value": "fas|chevron-up",
            "label": "chevron-up"
        },
        {
            "value": "fas|chevron-right",
            "label": "chevron-right"
        },
        {
            "value": "fas|chevron-left",
            "label": "chevron-left"
        },
        {
            "value": "fas|chevron-down",
            "label": "chevron-down"
        },
        {
            "value": "fas|chevron-circle-up",
            "label": "Chevron Circle Up"
        },
        {
            "value": "fas|chevron-circle-right",
            "label": "Chevron Circle Right"
        },
        {
            "value": "fas|chevron-circle-left",
            "label": "Chevron Circle Left"
        },
        {
            "value": "fas|chevron-circle-down",
            "label": "Chevron Circle Down"
        },
        {
            "value": "fas|chess-rook",
            "label": "Chess Rook"
        },
        {
            "value": "fas|chess-queen",
            "label": "Chess Queen"
        },
        {
            "value": "fas|chess-pawn",
            "label": "Chess Pawn"
        },
        {
            "value": "fas|chess-knight",
            "label": "Chess Knight"
        },
        {
            "value": "fas|chess-king",
            "label": "Chess King"
        },
        {
            "value": "fas|chess-board",
            "label": "Chess Board"
        },
        {
            "value": "fas|chess-bishop",
            "label": "Chess Bishop"
        },
        {
            "value": "fas|chess",
            "label": "Chess"
        },
        {
            "value": "fas|cheese",
            "label": "Cheese"
        },
        {
            "value": "fas|check-square",
            "label": "Check Square"
        },
        {
            "value": "far|check-square",
            "label": "Check Square"
        },
        {
            "value": "fas|check-double",
            "label": "Double Check"
        },
        {
            "value": "fas|check-circle",
            "label": "Check Circle"
        },
        {
            "value": "far|check-circle",
            "label": "Check Circle"
        },
        {
            "value": "fas|check",
            "label": "Check"
        },
        {
            "value": "fas|chart-pie",
            "label": "Pie Chart"
        },
        {
            "value": "fas|chart-line",
            "label": "Line Chart"
        },
        {
            "value": "fas|chart-bar",
            "label": "Bar Chart"
        },
        {
            "value": "far|chart-bar",
            "label": "Bar Chart"
        },
        {
            "value": "fas|chart-area",
            "label": "Area Chart"
        },
        {
            "value": "fas|charging-station",
            "label": "Charging Station"
        },
        {
            "value": "fas|chalkboard-teacher",
            "label": "Chalkboard Teacher"
        },
        {
            "value": "fas|chalkboard",
            "label": "Chalkboard"
        },
        {
            "value": "fas|chair",
            "label": "Chair"
        },
        {
            "value": "fas|certificate",
            "label": "certificate"
        },
        {
            "value": "fab|centos",
            "label": "Centos"
        },
        {
            "value": "fab|centercode",
            "label": "Centercode"
        },
        {
            "value": "fab|cc-visa",
            "label": "Visa Credit Card"
        },
        {
            "value": "fab|cc-stripe",
            "label": "Stripe Credit Card"
        },
        {
            "value": "fab|cc-paypal",
            "label": "Paypal Credit Card"
        },
        {
            "value": "fab|cc-mastercard",
            "label": "MasterCard Credit Card"
        },
        {
            "value": "fab|cc-jcb",
            "label": "JCB Credit Card"
        },
        {
            "value": "fab|cc-discover",
            "label": "Discover Credit Card"
        },
        {
            "value": "fab|cc-diners-club",
            "label": "Diner's Club Credit Card"
        },
        {
            "value": "fab|cc-apple-pay",
            "label": "Apple Pay Credit Card"
        },
        {
            "value": "fab|cc-amex",
            "label": "American Express Credit Card"
        },
        {
            "value": "fab|cc-amazon-pay",
            "label": "Amazon Pay Credit Card"
        },
        {
            "value": "fas|cat",
            "label": "Cat"
        },
        {
            "value": "fas|cash-register",
            "label": "Cash Register"
        },
        {
            "value": "fas|cart-plus",
            "label": "Add to Shopping Cart"
        },
        {
            "value": "fas|cart-arrow-down",
            "label": "Shopping Cart Arrow Down"
        },
        {
            "value": "fas|carrot",
            "label": "Carrot"
        },
        {
            "value": "fas|caret-up",
            "label": "Caret Up"
        },
        {
            "value": "fas|caret-square-up",
            "label": "Caret Square Up"
        },
        {
            "value": "far|caret-square-up",
            "label": "Caret Square Up"
        },
        {
            "value": "fas|caret-square-right",
            "label": "Caret Square Right"
        },
        {
            "value": "far|caret-square-right",
            "label": "Caret Square Right"
        },
        {
            "value": "fas|caret-square-left",
            "label": "Caret Square Left"
        },
        {
            "value": "far|caret-square-left",
            "label": "Caret Square Left"
        },
        {
            "value": "fas|caret-square-down",
            "label": "Caret Square Down"
        },
        {
            "value": "far|caret-square-down",
            "label": "Caret Square Down"
        },
        {
            "value": "fas|caret-right",
            "label": "Caret Right"
        },
        {
            "value": "fas|caret-left",
            "label": "Caret Left"
        },
        {
            "value": "fas|caret-down",
            "label": "Caret Down"
        },
        {
            "value": "fas|caravan",
            "label": "Caravan"
        },
        {
            "value": "fas|car-side",
            "label": "Car Side"
        },
        {
            "value": "fas|car-crash",
            "label": "Car Crash"
        },
        {
            "value": "fas|car-battery",
            "label": "Car Battery"
        },
        {
            "value": "fas|car-alt",
            "label": "Alternate Car"
        },
        {
            "value": "fas|car",
            "label": "Car"
        },
        {
            "value": "fas|capsules",
            "label": "Capsules"
        },
        {
            "value": "fas|cannabis",
            "label": "Cannabis"
        },
        {
            "value": "fas|candy-cane",
            "label": "Candy Cane"
        },
        {
            "value": "fab|canadian-maple-leaf",
            "label": "Canadian Maple Leaf"
        },
        {
            "value": "fas|campground",
            "label": "Campground"
        },
        {
            "value": "fas|camera-retro",
            "label": "Retro Camera"
        },
        {
            "value": "fas|camera",
            "label": "camera"
        },
        {
            "value": "fas|calendar-week",
            "label": "Calendar with Week Focus"
        },
        {
            "value": "fas|calendar-times",
            "label": "Calendar Times"
        },
        {
            "value": "far|calendar-times",
            "label": "Calendar Times"
        },
        {
            "value": "fas|calendar-plus",
            "label": "Calendar Plus"
        },
        {
            "value": "far|calendar-plus",
            "label": "Calendar Plus"
        },
        {
            "value": "fas|calendar-minus",
            "label": "Calendar Minus"
        },
        {
            "value": "far|calendar-minus",
            "label": "Calendar Minus"
        },
        {
            "value": "fas|calendar-day",
            "label": "Calendar with Day Focus"
        },
        {
            "value": "fas|calendar-check",
            "label": "Calendar Check"
        },
        {
            "value": "far|calendar-check",
            "label": "Calendar Check"
        },
        {
            "value": "fas|calendar-alt",
            "label": "Alternate Calendar"
        },
        {
            "value": "far|calendar-alt",
            "label": "Alternate Calendar"
        },
        {
            "value": "fas|calendar",
            "label": "Calendar"
        },
        {
            "value": "far|calendar",
            "label": "Calendar"
        },
        {
            "value": "fas|calculator",
            "label": "Calculator"
        },
        {
            "value": "fab|buysellads",
            "label": "BuySellAds"
        },
        {
            "value": "fab|buy-n-large",
            "label": "Buy n Large"
        },
        {
            "value": "fas|business-time",
            "label": "Business Time"
        },
        {
            "value": "fas|bus-alt",
            "label": "Bus Alt"
        },
        {
            "value": "fas|bus",
            "label": "Bus"
        },
        {
            "value": "fab|buromobelexperte",
            "label": "Büromöbel-Experte GmbH & Co. KG."
        },
        {
            "value": "fas|burn",
            "label": "Burn"
        },
        {
            "value": "fas|bullseye",
            "label": "Bullseye"
        },
        {
            "value": "fas|bullhorn",
            "label": "bullhorn"
        },
        {
            "value": "fas|building",
            "label": "Building"
        },
        {
            "value": "far|building",
            "label": "Building"
        },
        {
            "value": "fas|bug",
            "label": "Bug"
        },
        {
            "value": "fab|buffer",
            "label": "Buffer"
        },
        {
            "value": "fab|btc",
            "label": "BTC"
        },
        {
            "value": "fas|brush",
            "label": "Brush"
        },
        {
            "value": "fas|broom",
            "label": "Broom"
        },
        {
            "value": "fas|broadcast-tower",
            "label": "Broadcast Tower"
        },
        {
            "value": "fas|briefcase-medical",
            "label": "Medical Briefcase"
        },
        {
            "value": "fas|briefcase",
            "label": "Briefcase"
        },
        {
            "value": "fas|bread-slice",
            "label": "Bread Slice"
        },
        {
            "value": "fas|brain",
            "label": "Brain"
        },
        {
            "value": "fas|braille",
            "label": "Braille"
        },
        {
            "value": "fas|boxes",
            "label": "Boxes"
        },
        {
            "value": "fas|box-open",
            "label": "Box Open"
        },
        {
            "value": "fas|box",
            "label": "Box"
        },
        {
            "value": "fas|bowling-ball",
            "label": "Bowling Ball"
        },
        {
            "value": "fas|border-style",
            "label": "Border Style"
        },
        {
            "value": "fas|border-none",
            "label": "Border None"
        },
        {
            "value": "fas|border-all",
            "label": "Border All"
        },
        {
            "value": "fab|bootstrap",
            "label": "Bootstrap"
        },
        {
            "value": "fas|bookmark",
            "label": "bookmark"
        },
        {
            "value": "far|bookmark",
            "label": "bookmark"
        },
        {
            "value": "fas|book-reader",
            "label": "Book Reader"
        },
        {
            "value": "fas|book-open",
            "label": "Book Open"
        },
        {
            "value": "fas|book-medical",
            "label": "Medical Book"
        },
        {
            "value": "fas|book-dead",
            "label": "Book of the Dead"
        },
        {
            "value": "fas|book",
            "label": "book"
        },
        {
            "value": "fas|bong",
            "label": "Bong"
        },
        {
            "value": "fas|bone",
            "label": "Bone"
        },
        {
            "value": "fas|bomb",
            "label": "Bomb"
        },
        {
            "value": "fas|bolt",
            "label": "Lightning Bolt"
        },
        {
            "value": "fas|bold",
            "label": "bold"
        },
        {
            "value": "fab|bluetooth-b",
            "label": "Bluetooth"
        },
        {
            "value": "fab|bluetooth",
            "label": "Bluetooth"
        },
        {
            "value": "fab|blogger-b",
            "label": "Blogger B"
        },
        {
            "value": "fab|blogger",
            "label": "Blogger"
        },
        {
            "value": "fas|blog",
            "label": "Blog"
        },
        {
            "value": "fas|blind",
            "label": "Blind"
        },
        {
            "value": "fas|blender-phone",
            "label": "Blender Phone"
        },
        {
            "value": "fas|blender",
            "label": "Blender"
        },
        {
            "value": "fab|blackberry",
            "label": "BlackBerry"
        },
        {
            "value": "fab|black-tie",
            "label": "Font Awesome Black Tie"
        },
        {
            "value": "fab|bity",
            "label": "Bity"
        },
        {
            "value": "fab|bitcoin",
            "label": "Bitcoin"
        },
        {
            "value": "fab|bitbucket",
            "label": "Bitbucket"
        },
        {
            "value": "fas|birthday-cake",
            "label": "Birthday Cake"
        },
        {
            "value": "fas|biohazard",
            "label": "Biohazard"
        },
        {
            "value": "fas|binoculars",
            "label": "Binoculars"
        },
        {
            "value": "fab|bimobject",
            "label": "BIMobject"
        },
        {
            "value": "fas|biking",
            "label": "Biking"
        },
        {
            "value": "fas|bicycle",
            "label": "Bicycle"
        },
        {
            "value": "fas|bible",
            "label": "Bible"
        },
        {
            "value": "fas|bezier-curve",
            "label": "Bezier Curve"
        },
        {
            "value": "fas|bell-slash",
            "label": "Bell Slash"
        },
        {
            "value": "far|bell-slash",
            "label": "Bell Slash"
        },
        {
            "value": "fas|bell",
            "label": "bell"
        },
        {
            "value": "far|bell",
            "label": "bell"
        },
        {
            "value": "fab|behance-square",
            "label": "Behance Square"
        },
        {
            "value": "fab|behance",
            "label": "Behance"
        },
        {
            "value": "fas|beer",
            "label": "beer"
        },
        {
            "value": "fas|bed",
            "label": "Bed"
        },
        {
            "value": "fab|battle-net",
            "label": "Battle.net"
        },
        {
            "value": "fas|battery-three-quarters",
            "label": "Battery 3/4 Full"
        },
        {
            "value": "fas|battery-quarter",
            "label": "Battery 1/4 Full"
        },
        {
            "value": "fas|battery-half",
            "label": "Battery 1/2 Full"
        },
        {
            "value": "fas|battery-full",
            "label": "Battery Full"
        },
        {
            "value": "fas|battery-empty",
            "label": "Battery Empty"
        },
        {
            "value": "fas|bath",
            "label": "Bath"
        },
        {
            "value": "fas|basketball-ball",
            "label": "Basketball Ball"
        },
        {
            "value": "fas|baseball-ball",
            "label": "Baseball Ball"
        },
        {
            "value": "fas|bars",
            "label": "Bars"
        },
        {
            "value": "fas|barcode",
            "label": "barcode"
        },
        {
            "value": "fab|bandcamp",
            "label": "Bandcamp"
        },
        {
            "value": "fas|band-aid",
            "label": "Band-Aid"
        },
        {
            "value": "fas|ban",
            "label": "ban"
        },
        {
            "value": "fas|balance-scale-right",
            "label": "Balance Scale (Right-Weighted)"
        },
        {
            "value": "fas|balance-scale-left",
            "label": "Balance Scale (Left-Weighted)"
        },
        {
            "value": "fas|balance-scale",
            "label": "Balance Scale"
        },
        {
            "value": "fas|bahai",
            "label": "Bahá'í"
        },
        {
            "value": "fas|bacon",
            "label": "Bacon"
        },
        {
            "value": "fas|backward",
            "label": "backward"
        },
        {
            "value": "fas|backspace",
            "label": "Backspace"
        },
        {
            "value": "fas|baby-carriage",
            "label": "Baby Carriage"
        },
        {
            "value": "fas|baby",
            "label": "Baby"
        },
        {
            "value": "fab|aws",
            "label": "Amazon Web Services (AWS)"
        },
        {
            "value": "fas|award",
            "label": "Award"
        },
        {
            "value": "fab|aviato",
            "label": "Aviato"
        },
        {
            "value": "fab|avianex",
            "label": "avianex"
        },
        {
            "value": "fab|autoprefixer",
            "label": "Autoprefixer"
        },
        {
            "value": "fas|audio-description",
            "label": "Audio Description"
        },
        {
            "value": "fab|audible",
            "label": "Audible"
        },
        {
            "value": "fas|atom",
            "label": "Atom"
        },
        {
            "value": "fab|atlassian",
            "label": "Atlassian"
        },
        {
            "value": "fas|atlas",
            "label": "Atlas"
        },
        {
            "value": "fas|at",
            "label": "At"
        },
        {
            "value": "fab|asymmetrik",
            "label": "Asymmetrik, Ltd."
        },
        {
            "value": "fas|asterisk",
            "label": "asterisk"
        },
        {
            "value": "fas|assistive-listening-systems",
            "label": "Assistive Listening Systems"
        },
        {
            "value": "fab|artstation",
            "label": "Artstation"
        },
        {
            "value": "fas|arrows-alt-v",
            "label": "Alternate Arrows Vertical"
        },
        {
            "value": "fas|arrows-alt-h",
            "label": "Alternate Arrows Horizontal"
        },
        {
            "value": "fas|arrows-alt",
            "label": "Alternate Arrows"
        },
        {
            "value": "fas|arrow-up",
            "label": "arrow-up"
        },
        {
            "value": "fas|arrow-right",
            "label": "arrow-right"
        },
        {
            "value": "fas|arrow-left",
            "label": "arrow-left"
        },
        {
            "value": "fas|arrow-down",
            "label": "arrow-down"
        },
        {
            "value": "fas|arrow-circle-up",
            "label": "Arrow Circle Up"
        },
        {
            "value": "fas|arrow-circle-right",
            "label": "Arrow Circle Right"
        },
        {
            "value": "fas|arrow-circle-left",
            "label": "Arrow Circle Left"
        },
        {
            "value": "fas|arrow-circle-down",
            "label": "Arrow Circle Down"
        },
        {
            "value": "fas|arrow-alt-circle-up",
            "label": "Alternate Arrow Circle Up"
        },
        {
            "value": "far|arrow-alt-circle-up",
            "label": "Alternate Arrow Circle Up"
        },
        {
            "value": "fas|arrow-alt-circle-right",
            "label": "Alternate Arrow Circle Right"
        },
        {
            "value": "far|arrow-alt-circle-right",
            "label": "Alternate Arrow Circle Right"
        },
        {
            "value": "fas|arrow-alt-circle-left",
            "label": "Alternate Arrow Circle Left"
        },
        {
            "value": "far|arrow-alt-circle-left",
            "label": "Alternate Arrow Circle Left"
        },
        {
            "value": "fas|arrow-alt-circle-down",
            "label": "Alternate Arrow Circle Down"
        },
        {
            "value": "far|arrow-alt-circle-down",
            "label": "Alternate Arrow Circle Down"
        },
        {
            "value": "fas|archway",
            "label": "Archway"
        },
        {
            "value": "fas|archive",
            "label": "Archive"
        },
        {
            "value": "fab|apple-pay",
            "label": "Apple Pay"
        },
        {
            "value": "fas|apple-alt",
            "label": "Fruit Apple"
        },
        {
            "value": "fab|apple",
            "label": "Apple"
        },
        {
            "value": "fab|apper",
            "label": "Apper Systems AB"
        },
        {
            "value": "fab|app-store-ios",
            "label": "iOS App Store"
        },
        {
            "value": "fab|app-store",
            "label": "App Store"
        },
        {
            "value": "fas|ankh",
            "label": "Ankh"
        },
        {
            "value": "fab|angular",
            "label": "Angular"
        },
        {
            "value": "fab|angrycreative",
            "label": "Angry Creative"
        },
        {
            "value": "fas|angry",
            "label": "Angry Face"
        },
        {
            "value": "far|angry",
            "label": "Angry Face"
        },
        {
            "value": "fas|angle-up",
            "label": "angle-up"
        },
        {
            "value": "fas|angle-right",
            "label": "angle-right"
        },
        {
            "value": "fas|angle-left",
            "label": "angle-left"
        },
        {
            "value": "fas|angle-down",
            "label": "angle-down"
        },
        {
            "value": "fas|angle-double-up",
            "label": "Angle Double Up"
        },
        {
            "value": "fas|angle-double-right",
            "label": "Angle Double Right"
        },
        {
            "value": "fas|angle-double-left",
            "label": "Angle Double Left"
        },
        {
            "value": "fas|angle-double-down",
            "label": "Angle Double Down"
        },
        {
            "value": "fab|angellist",
            "label": "AngelList"
        },
        {
            "value": "fab|android",
            "label": "Android"
        },
        {
            "value": "fas|anchor",
            "label": "Anchor"
        },
        {
            "value": "fab|amilia",
            "label": "Amilia"
        },
        {
            "value": "fas|american-sign-language-interpreting",
            "label": "American Sign Language Interpreting"
        },
        {
            "value": "fas|ambulance",
            "label": "ambulance"
        },
        {
            "value": "fab|amazon-pay",
            "label": "Amazon Pay"
        },
        {
            "value": "fab|amazon",
            "label": "Amazon"
        },
        {
            "value": "fas|allergies",
            "label": "Allergies"
        },
        {
            "value": "fab|alipay",
            "label": "Alipay"
        },
        {
            "value": "fas|align-right",
            "label": "align-right"
        },
        {
            "value": "fas|align-left",
            "label": "align-left"
        },
        {
            "value": "fas|align-justify",
            "label": "align-justify"
        },
        {
            "value": "fas|align-center",
            "label": "align-center"
        },
        {
            "value": "fab|algolia",
            "label": "Algolia"
        },
        {
            "value": "fab|airbnb",
            "label": "Airbnb"
        },
        {
            "value": "fas|air-freshener",
            "label": "Air Freshener"
        },
        {
            "value": "fab|affiliatetheme",
            "label": "affiliatetheme"
        },
        {
            "value": "fab|adversal",
            "label": "Adversal"
        },
        {
            "value": "fab|adobe",
            "label": "Adobe"
        },
        {
            "value": "fab|adn",
            "label": "App.net"
        },
        {
            "value": "fas|adjust",
            "label": "adjust"
        },
        {
            "value": "fas|address-card",
            "label": "Address Card"
        },
        {
            "value": "far|address-card",
            "label": "Address Card"
        },
        {
            "value": "fas|address-book",
            "label": "Address Book"
        },
        {
            "value": "far|address-book",
            "label": "Address Book"
        },
        {
            "value": "fas|ad",
            "label": "Ad"
        },
        {
            "value": "fab|acquisitions-incorporated",
            "label": "Acquisitions Incorporated"
        },
        {
            "value": "fab|accusoft",
            "label": "Accusoft"
        },
        {
            "value": "fab|accessible-icon",
            "label": "Accessible Icon"
        },
        {
            "value": "fab500px",
            "label": "500px"
        }
    ];
};

MoorlFoundation.prototype = {};

const MoorlFoundationInstance = new MoorlFoundation();

window.MoorlFoundation = MoorlFoundationInstance;
exports.default = MoorlFoundationInstance;
module.exports = exports.default;
