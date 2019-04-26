<template>
    <span class="changingWords">
        <span class="word word--1">accessible</span>
        <span class="word word--2">fast</span>
        <span class="word word--3">progressive</span>
        <span class="word word--4">extendable</span>
        <span class="word word--5">modern</span>
    </span>
</template>

<style lang="scss" scoped>
.changingWords {
  position: relative;
  display: inline-block;
  width: 5rem;
  height: var(--header-words-font-size);
  top: -0.16rem;
}

.word {
  position: absolute;
  top: 0;
  left: 0;
}

@mixin wordsAnimtion($number: 5, $duration: 10s) {
  @for $index from 1 through $number {
    .word--#{$index} {
      $percentage: 100 / $number;
      @keyframes word#{$index} {
        #{$percentage * ($index - 1)}% {
          @if $index == 0 {
            opacity: 1;
          } @else {
            opacity: 0;
          }
        }
  
        #{$percentage * $index - 1}% {
          opacity: 1;
        }
  
        #{$percentage * $index}% {
          opacity: 0;
        }
      }

      opacity: 0;
      animation: word#{$index} $duration ease-out infinite;
    }
  }
}

@include wordsAnimtion();
</style>
