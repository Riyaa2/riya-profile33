<template>
  <q-layout view="hHh Lpr fFf">
    <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-header elevated>
      <q-toolbar class="row justify-start">
        <q-btn flat round dense icon="menu" class="lt-xs" />

        <q-toolbar-title>Welcome to Riya's Profile</q-toolbar-title>
        <q-tabs v-model="tab">
          <q-route-tab
            name="About"
            label="About"
            :to="{ name: 'About', params: { id: 'About' } }"
          />
          <q-route-tab
            name="Interest"
            label="Interest"
            :to="{ name: 'Interest', params: { id: 'Interest' } }"
          />
          <q-route-tab
            name="Thought"
            label="Qualification"
            :to="{ name: 'Thought', params: { id: 'Qualification' } }"
          />
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view :key="$route.params.id" />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  // name: 'LayoutName',
  meta: {
    title: "Break Bad"
  },
  data() {
    return {
      leftDrawer: false,
      tab: ""
    };
  }
};
</script>