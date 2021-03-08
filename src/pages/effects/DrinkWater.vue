<template>
  <base-effect-page-title>
    <h1>
      Stay hydrated during the day
    </h1>
    <h3>
      Your Goal is to drink
      <input type="text" v-model="goal" />
      glasses of water per day.
    </h3>
  </base-effect-page-title>
  <section class="dark-bg">
    <div class="content">
      <div class="cup">
        <div class="remained" id="remained">
          <span id="liters">{{ goal }} cups</span>
          <small> Remained</small>
        </div>

        <div class="percentage" id="percentage"></div>
      </div>

      <div>
        <p class="text">Select how many glasses of water you have drank</p>
        <div class="cups">
          <div class="cup cup-small">250 ml</div>
          <div class="cup cup-small">250 ml</div>
          <div class="cup cup-small">250 ml</div>
          <div class="cup cup-small">250 ml</div>
          <div class="cup cup-small">250 ml</div>
          <div class="cup cup-small">250 ml</div>
          <div class="cup cup-small">250 ml</div>
          <div class="cup cup-small">250 ml</div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      goal: 8
    };
  },
  mounted() {
    const smallCups = document.querySelectorAll(".cup-small");
    const liters = document.getElementById("liters");
    const percentage = document.getElementById("percentage");
    const remained = document.getElementById("remained");

    function updateBigCup() {
      const fullCups = document.querySelectorAll(".cup-small.full").length;
      const totalCups = smallCups.length;

      if (fullCups === 0) {
        percentage.style.visibility = "hidden";
        percentage.style.height = 0;
      } else {
        percentage.style.visibility = "visible";
        percentage.style.height = `${(fullCups / totalCups) * 330}px`;
        percentage.innerText = `${(fullCups / totalCups) * 100}%`;
      }

      if (fullCups === totalCups) {
        remained.style.visibility = "hidden";
        remained.style.height = 0;
      } else {
        remained.style.visibility = "visible";
        liters.innerText = `${2 - (250 * fullCups) / 1000} L`;
      }
    }

    function highlightCups(index) {
      //if the last full glass is selected :
      if (smallCups[index].classList.contains("full")) {
        if (
          !smallCups[index].nextElementSibling ||
          !smallCups[index].nextElementSibling.classList.contains("full")
        )
          index--;
      }

      //add 'full' class to all the glasses before selected glass
      smallCups.forEach((cup, index2) => {
        if (index2 <= index) {
          cup.classList.add("full");
        } else {
          cup.classList.remove("full");
        }
      });

      updateBigCup();
    }

    smallCups.forEach((cup, index) => {
      cup.addEventListener("click", () => highlightCups(index));
    });
  }
};
</script>
<style lang="scss" scoped>
h3,
h1 {
  margin: 10px 0 5px 0;
}

input {
  width: 35px;
  padding: 5px;
  margin: 0 2px;
  text-align: center;
  border-radius: 10px;
  border: 1px solid $effect-analogous-color-2;
  color: $effect-analogous-color-2;

  &:focus {
    outline: 0;
  }
}
.content {
  margin-top: 20px;
  @extend %flex-row;
}

.cup {
  background-color: #fff;
  border: 4px solid $effect-glass-border;
  color: $effect-light-font-color;
  border-radius: 0 0 40px 40px;
  height: 330px;
  width: 150px;
  margin: 30px;
  flex-wrap: nowrap;
  @extend %flex-column;
  justify-content: center;
  overflow: hidden;

  .remained {
    flex: 1;
    transition: 0.3s ease;
    @extend %flex-column;
    justify-content: center;

    span {
      font-size: 1.1rem;
      font-weight: bold;
    }

    small {
      font-size: 0.7rem;
    }
  }

  .percentage {
    @extend %flex-column;
    justify-content: center;
    font-weight: bold;
    font-size: 1.5rem;
    height: 0;
    transition: 0.3s ease;
    background-color: $effect-glass-bg;
    width: 100%;
  }

  &.cup-small {
    height: 95px;
    width: 50px;
    border-radius: 0 0 15px 15px;
    background-color: rgba(255, 255, 255, 0.8);
    cursor: pointer;
    font-size: 0.7rem;
    text-align: center;
    margin: 5px;
    transition: 0.3s ease;
    border: 2px solid $effect-glass-border;

    &.full {
      background-color: $effect-glass-bg;
    }
  }
}

.cups {
  @extend %flex-row;
  justify-content: center;
  width: 280px;
}

@media screen and (max-width: 768px) {
  .content {
    flex-direction: column;
  }

  h1,
  h3 {
    font-size: 1rem;
  }
}
</style>
