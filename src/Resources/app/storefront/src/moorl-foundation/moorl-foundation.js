import Plugin from 'src/plugin-system/plugin.class';
import HttpClient from 'src/service/http-client.service';
import Feature from 'src/helper/feature.helper';

export default class MoorlFoundation extends Plugin {
    init() {
        this._client = new HttpClient(window.accessKey, window.contextToken);
        this._registerModalEvents();
        this.callback = null;
    }

    _registerModalEvents() {
        const that = this;

        const buttons = document.querySelectorAll('[data-moorl-foundation-modal]');
        const modal = document.getElementById('moorlFoundationModal');

        buttons.forEach((button) => {
            button.addEventListener('click', () => {
                let url = button.dataset.moorlFoundationModal;

                that._client.get(url, (response) => {
                    that._openModal(response, null);
                });
            });
        });

        modal.addEventListener('hidden.bs.modal', () => {
            const modalBody = modal.querySelector('.moorl-foundation-modal-body');
            modalBody.innerHTML = "";
        });

        window.moorlFoundationModal = function (url, callback) {
            that._client.get(url, (response) => {
                that._openModal(response, callback);
            });
        }
    }

    _openModal(response, callback) {
        const modal = document.getElementById('moorlFoundationModal');
        modal.innerHTML = response;

        const bsModal = new bootstrap.Modal(modal);
        bsModal.show();

        window.PluginManager.initializePlugins();

        if (typeof callback == 'function') {
            callback(modal, bsModal);
        }
    }
}
