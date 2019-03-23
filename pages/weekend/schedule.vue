<template>
  <div>
    <SubHeaderWeekend />
    <div class='w content'>
      <h1 id="title">Weekend Schedule</h1>
      <p>This schedule is still preliminary and subject to chage, but it should give you a pretty good idea on what to expect from the BASH Festival of Code weekend.</p>
      <h2>Saturday 10th August</h2>
      <div class="table">
        <table>
          <tr>
            <th>Time</th>
            <th>Platform</th>
            <th>Auditorium</th> 
            <th>Workshop Rooms</th>
          </tr>
          <tr v-for='item in saturday' :key='item.time'>
            <td>{{item.t}}</td>
            <td>{{item.p}}</td>
            <td>{{item.a}}</td>
            <td>{{item.w}}</td>
          </tr>
        </table>
      </div>
      <h2>Sunday 11th August</h2>
      <div class="table">
        <table>
          <tr>
            <th>Time</th>
            <th>Platform</th>
            <th>Auditorium</th> 
            <th>Workshop Rooms</th>
          </tr>
          <tr v-for='item in sunday' :key='item.time'>
            <td>{{item.t}}</td>
            <td>{{item.p}}</td>
            <td>{{item.a}}</td>
            <td>{{item.w}}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import SubHeaderWeekend from '@/components/nav/subnavs/SubHeaderWeekend'
export default {
  data() {
    return {
      saturday: [
        { t: '11:00 - 13:00', p: 'Registration' },
        { t: '12:45 - 13:30', p: 'Lunch' },
        { t: '13:30 - 14:00', a: 'Welcome talks' },
        { t: '14:00 - 16:00', p: 'Science fair' },
        { t: '16:00 - 19:30', p: 'Breakout space', a: 'Talks', w: 'Talks & Workshops' },
        { t: '19:30 - 20:30', p: 'Dinner' },
        { t: '20:00 - 22:00', p: 'Breakout space', a: 'Movie', w: 'Social activities' },
        { t: '22:30', w: 'Sleeping spaces' }
      ],
      sunday: [
        { t: '09:00', p: 'Leave sleeping spaces' },
        { t: '09:00 - 10:00', p: 'Breakfast' },
        { t: '10:00 - 13:00', a: 'Talks', w: 'Talks & Workshops' },
        { t: '13:00 - 14:00', p: 'Lunch' },
        { t: '14:00 - 15:30', a: 'Finale presentations' },
        { t: '15:30 - 16:00', a: 'Music performance' },
        { t: '16:00 - 16:30', a: 'Winners announced & farewell' }
      ]
    }
  },
  components: { SubHeaderWeekend },
  head () {
    return { title: `Schedule - ${this.$store.state.title}` }
  },
}
</script>

<style lang="scss" scoped>
tr td:first-child {
  font-weight: bold;
  color: var(--blue);
}

@media screen and (max-width: 1000px) {
  table {
    width: 1000px;
  }
  .table {
    overflow-x: scroll;
  }
}
</style>
