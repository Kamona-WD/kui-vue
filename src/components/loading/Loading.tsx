import { defineComponent, toRefs } from 'vue'

export default defineComponent({
  name: 'KLoading',

  props: {
    size: {
      type: String,
      default: '2rem',
    },
    color: {
      type: String,
      default: '#ffffff',
    },
    textSize: {
      type: String,
      default: '1rem',
    },
    vertical: {
      type: Boolean,
      default: false,
    },
  },

  setup(props, { slots }) {
    const { size, color, textSize, vertical } = toRefs(props)

    const displayText = () => {
      return (
        <span
          class={`inline-block ${vertical.value ? 'mt-1' : 'ml-2 rtl:ml-0 rtl:mr-2'}`}
          style={{
            fontSize: textSize.value,
          }}
        >
          {slots.default?.()}
        </span>
      )
    }

    return () => (
      <div class={`inline-flex items-center ${vertical.value ? 'flex-col justify-center' : 'flex-row'}`}>
        <div class="k-loading" style={`--k-loading-border-color: ${color.value}; --k-loading-size: ${size.value}`}>
          <div class="k-loading__inner"></div>
        </div>
        {slots.default && displayText()}
      </div>
    )
  },
})
