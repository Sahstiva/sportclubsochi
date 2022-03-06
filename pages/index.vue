<template>
  <div>
    <nav-bar />
    <title-bar />
    <upcoming-races />
    <club-trainings />
  </div>
</template>

<script>
import NavBar from '@/components/Navbar.vue';
import TitleBar from '@/components/TitleBar.vue';
import UpcomingRaces from '@/components/UpcomingRaces.vue';
import ClubTrainings from '@/components/ClubTrainings.vue';

export default {
  name: 'SportClubSochi',
  components: {
    NavBar,
    TitleBar,
    UpcomingRaces,
    ClubTrainings,
  },
};
</script>
