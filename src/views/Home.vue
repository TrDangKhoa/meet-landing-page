<template>
  <div class="mx-auto py-[71px] px-24 max-w-[1110px]">
    <div
      class="
        bg-dark
        rounded-8
        shadow-lg
        flex flex-col
        overflow-hidden
        md:flex-row
      "
    >
      <div class="sm:flex-1 md:order-1">
        <img
          src="@/assets/laughing-people.png"
          alt="people laughing"
          class="w-full h-[240px] sm:h-full object-cover"
        />
      </div>
      <div class="flex flex-col sm:flex-1">
        <div
          class="
            px-31
            pt-40
            pb-32
            lg:pt-[71px] lg:pl-72 lg:pr-[95px] lg:pb-[59px]
          "
        >
          <h1
            class="
              text-center
              font-bold
              text-28
              leading-32
              mb-16
              sm:text-left
              lg:mb-25 lg:text-36 lg:leading-44
            "
          >
            Get <span class="text-lightish-purple">insights</span> that help
            your business grow.
          </h1>
          <p
            class="
              text-center text-white text-15
              leading-25
              text-opacity-75
              mb-40
              sm:text-left
              lg:mb-72
            "
          >
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </p>
          <div class="flex flex-col gap-24 lg:gap-60 sm:flex-row">
            <div class="flex flex-col items-center sm:items-start">
              <span class="text-24 font-bold">10k+</span>
              <span
                class="
                  text-12 text-opacity-60
                  font-lexend
                  leading-25
                  text-white
                "
                >COMPANIES</span
              >
            </div>
            <div class="flex flex-col items-center sm:items-start">
              <span class="text-24 font-bold">314</span>
              <span
                class="
                  text-12 text-opacity-60
                  font-lexend
                  leading-25
                  text-white
                "
                >TEMPLATES</span
              >
            </div>
            <div class="flex flex-col items-center sm:items-start">
              <span class="text-24 font-bold">12M+</span>
              <span
                class="
                  text-12 text-opacity-60
                  font-lexend
                  leading-25
                  text-white
                "
                >QUERIES</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
