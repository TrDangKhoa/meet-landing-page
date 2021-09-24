<template>
  <div class="relative sm:py-[102px] py-[71px] z-0 overflow-hidden">
    <div class="absolute top-0 w-full h-1/3 z-[-1] bg-light-periwinkle">
      <span
        class="
          wave
          before:top-[-80px] before:w-4/5
          sm:before:top-[100px] sm:before:w-3/5
          after:w-4/5 after:left-[60%] after:translate-y-[-77px]
          sm:after:w-3/5 sm:after:left-1/2 sm:after:translate-y-[-60px]
        "
      ></span>
    </div>
    <div class="sm:px-0 px-24">
      <div
        class="mx-auto w-[327px] sm:w-[495px] flex flex-col rounded-20 bg-white"
      >
        <img src="@/assets/dancing-girl.png" class="w-full object-containt" />
        <div class="sm:px-48 sm:pt-45 sm:pb-48 p-32 flex flex-col text-center">
          <h1 class="text-28 font-black text-dark-blue-grey mb-16">
            Order Summary
          </h1>
          <p class="leading-26 sm:mb-20 mb-24 text-blue-grey px-20">
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </p>
          <div
            class="
              relative
              w-full
              rounded-11
              bg-pale-grey
              sm:px-24 sm:px-25
              px-16
              py-17
              flex
              items-center
              sm:mb-32
              mb-24
            "
          >
            <div class="w-48 h-48 bg-very-light-blue rounded-full p-15 mr-20">
              <img
                src="../assets/icons/song-note.svg"
                class="object-containt"
              />
            </div>
            <div class="flex flex-col gap-6">
              <span class="text-dark-blue-grey font-black">Annual Plan</span>
              <span class="text-blue-grey">$59.99/year</span>
            </div>
            <button
              class="
                absolute
                right-16
                top-1/2
                -translate-y-1/2
                bg-transparent
                text-blurple
                font-bold
                underline
                hover:no-underline
              "
              @click="onClick"
            >
              Change
            </button>
          </div>
          <button
            class="
              w-full
              flex
              items-center
              justify-center
              rounded-11
              bg-blurple
              text-white text-15
              font-black
              shadow-btn-primary
              sm:mb-32
              mb-24
              py-15
            "
          >
            Proceed to Payment
          </button>
          <button
            class="mx-auto bg-transparent text-15 font-black text-blue-grey"
          >
            Cancel Order
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const onClick = () => {
  console.log("Change plan");
};
</script>

<style>
.wave {
  display: block;
  position: relative;
  height: 100%;
  background: #d6e1ff;
}
.wave::before {
  content: "";
  display: block;
  position: absolute;
  border-radius: 100%;
  height: 400px;
  background-color: #d6e1ff;
  left: -150px;
}
.wave::after {
  content: "";
  display: block;
  position: absolute;
  border-radius: 100%;
  height: 400px;
  background-color: #e0e8ff;
  top: 100%;
}
</style>
