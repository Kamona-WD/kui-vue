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
          class={`kui-inline-block ${vertical.value ? 'kui-mt-1' : 'kui-ml-2 rtl:kui-ml-0 rtl:kui-mr-2'}`}
          style={{
            fontSize: textSize.value,
          }}
        >
          {slots.default?.()}
        </span>
      )
    }

    return () => (
      <div
        class={`kui-inline-flex kui-items-center ${
          vertical.value ? 'kui-flex-col kui-justify-center' : 'kui-flex-row'
        }`}
      >
        <div
          class="kui-loading"
          style={`--kui-loading-border-color: ${color.value}; --kui-loading-size: ${size.value}`}
        >
          <div class="kui-loading__inner"></div>
        </div>
        {slots.default && displayText()}
      </div>
    )
  },
})
