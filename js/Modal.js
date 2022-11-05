export default {
    props: {
        show: Boolean
    },
    template: `
    <transition name="modal">
      <div v-if="show" class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal-header">
              <slot name="header">Benvenuto su Boolzapp</slot>
            </div>
  
            <div class="modal-body">
              <slot name="body">Ciao! grazie per aver scielto Boolzapp, qui a sinistra potrai vedere la lista delle tue chat aperte, sciegline una e inizia chattare con i tuoi amici</slot>
            </div>
  
            <div class="modal-footer">
              <slot name="footer">
                <button
                  class="modal-default-button btn btn-outline-primary"
                  @click="$emit('close')"
                >Inizia a chattare</button>
              </slot>
            </div>
          </div>
        </div>
      </div>
    </transition>
    `
}
