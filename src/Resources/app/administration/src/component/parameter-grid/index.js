import template from './index.html.twig';
const {Component} = Shopware;

Component.register('moorl-parameter-grid', {
    template,

    model: {
        prop: 'parameters',
        event: 'change',
    },

    props: {
        label: {
            type: String,
            default: null,
            required: false,
        },
        helpText: {
            type: String,
            default: null,
            required: false,
        },
        parameters: {
            type: Array,
            default: [],
            required: true,
        },
        dataSelection: {
            type: Array,
            default: [],
            required: true,
        },
        fixed: {
            type: Boolean,
            default: true,
            required: false,
        },
        showActions: {
            type: Boolean,
            default: true,
            required: false,
        },
    },

    data() {
        return {
            items: this.parameters,
        };
    },
    
    computed: {
        gridColumns() {
            const columns = [
                {
                    label: this.$tc('moorl-parameter-grid.properties.name'),
                    property: 'name',
                    dataIndex: 'name',
                    primary: true
                },
            ];

            if (this.fixed) {
                columns.push({
                    label: this.$tc('moorl-parameter-grid.properties.label'),
                    property: 'label',
                    dataIndex: 'label',
                    primary: true
                });
            }

            columns.push({
                label: this.$tc('moorl-parameter-grid.properties.data'),
                property: 'data',
                dataIndex: 'data',
                primary: true,
                width: '320px'
            });

            return columns;
        },
    },

    watch: {
        parameters: {
            handler(value) {
                if (!value || !value.length) {
                    return;
                }

                this.items = value;
            },
        },
    },

    methods: {
        toggleCustomValue(item, itemIndex) {
            this.$set(this.items, itemIndex, { ...item, isCustom: !item.isCustom });
            this.$emit('change', this.items);
        },

        onChangeItem(item, itemIndex) {
            if (!item.name || !item.data || itemIndex !== this.items.length - 1) {
                return;
            }

            this.$emit('change', this.items);
        },

        addItem() {
            this.items.push({data: '', name: ''})
        },

        deleteItem(itemIndex) {
            this.$delete(this.items, itemIndex);
            this.$emit('change', this.items);
        }
    },
});