<template>
  <div>
    <SubHeaderWeekend />
    <div class='w content'>
      <h1 id="title">Weekend Venue</h1>
      <p>The weekend venue is <a href="https://www.millenniumpoint.org.uk/" target='_blank'>Millenium Point</a> in Birmingham. The whole event, including the overnight portion, will be in this space. It's a 10 minute walk from Birmingham New Street station. Your Hub Leader will organise travel for your group and instruct you on the tickets to buy and logistics around travel.</p>
      <p><i class='fas fa-map-pin'></i> Curzon St, Birmingham B4 7XG</p>
      <div class="split">
        <GmapMap
        :center="{lat: 52.483158, lng: -1.885711}"
        :zoom="12"
        map-type-id="roadmap"
        class="map">
          <GmapMarker
            :position="{lat: 52.483158, lng: -1.885711}"
            :clickable="true"
            :draggable="true" />
        </GmapMap>
        <div class="img">
          <img src="~/assets/img/millenium-point.jpg" alt="Picture of Millenium Point">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SubHeaderWeekend from '@/components/nav/subnavs/SubHeaderWeekend'
export default {
  components: { SubHeaderWeekend }
}
</script>

<style lang="scss" scoped>
i {
  margin-right: 0.75em;
}
.split {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 2em;
  > * {
    width: 49%;
  }
}
img {
  width: 100%;
  display: block;
}
@media screen and (max-width: 1000px) {
  .split {
    flex-wrap: wrap;
    flex-direction: column-reverse;
    > * {
      width: 100%;
    }
    .map {
      height: 500px;
      margin-top: 1em;
    }
  }
}
</style>
