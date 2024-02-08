<template>
  <div class="typingEffect">
    <component :is="elementType" class="typingEffect__line" :style="computedStyle">
      {{ typeLine }}
    </component>
  </div>
</template>

<script setup lang="ts">
import {
  ref,
  onMounted,
  defineProps,
  watch,
} from 'vue';
import type { PropType } from 'vue';

type TBlinkDuration =
  `${number}${'s' | 'ms'}`;

type TTypingSpeed = 'fastest' | 'fast' | 'normal' | 'slow' | 'slowest';

interface ITypingSpeedMap {
  [key: string]: number;
}

const props = defineProps({
  blinkDuration: {
    type: String as PropType<TBlinkDuration>,
    default: '1s' as TBlinkDuration,
  },
  cursorColor: {
    type: String,
    default: 'white',
  },
  elementType: {
    type: String,
    default: 'code',
  },
  fontFamily: {
    type: String,
    default: 'sans-serif',
  },
  fontSize: {
    type: String,
    default: '15px',
  },
  text: {
    type: String,
    default: '',
  },
  textColor: {
    type: String,
    default: 'black',
  },
  typingSpeed: {
    type: String as PropType<TTypingSpeed>,
    default: 'normal' as TTypingSpeed,
  },
});

const typeLine = ref('');
const isAnimationInProgress = ref(false);
const animationRepeatCount = ref<number | string>(0);

const computedStyle = {
  fontFamily: props.fontFamily,
  fontSize: props.fontSize,
  color: props.textColor,
};

const typingSpeedMap: ITypingSpeedMap = {
  fastest: 40,
  fast: 25,
  normal: 10,
  slow: 5,
  slowest: 3,
};

const typingEffectTimeOut = ref(() => {
  const speed: TTypingSpeed = props.typingSpeed as TTypingSpeed;
  return 1000 / typingSpeedMap[speed];
});

onMounted(() => {
  const typeEffect = () => {
    if (typeLine.value.length < props.text.length) {
      typeLine.value += props.text.charAt(typeLine.value.length);
      setTimeout(typeEffect, typingEffectTimeOut.value());
      isAnimationInProgress.value = true;
    } else {
      isAnimationInProgress.value = false;
    }
  };

  typeEffect();
});

watch(() => isAnimationInProgress.value, (newValue) => {
  animationRepeatCount.value = newValue ? 'infinite' : 0;
});
</script>

<style scoped>
.typingEffect {
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: 0 auto;
  width: fit-content;
  height: fit-content;
  background-color: inherit;
}

.typingEffect__line {
  animation: blink v-bind("$props.blinkDuration") v-bind("animationRepeatCount");
  padding: 0;
  background-color: inherit;
  border-right: 2px solid transparent;
}

@keyframes blink {

  0%,
  45% {
    border-color: transparent;
  }

  50%,
  100% {
    border-color: v-bind("$props.cursorColor");
  }
}
</style>
