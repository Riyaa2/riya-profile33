<template>
  <q-page padding>
  <div class ="column justify-center items-center bgcolor" >
    <q-card class="mycard">
        <div class="text-h4 bold-font place">{{ MyPrincipal }}</div>
            <img src="..//assets//myimg.png" style="border-radius: 50%; width: 30%; height: 30%; align-items: center;">
      
   
  
      <q-card-section>
        <div class="text-h3 bold-font">Riya Ranjan</div>
        <div>{{ about }}</div>
        <div class="bold-font">--------------------------------------------</div>
      </q-card-section>
      

      <q-card-section class="q-pt-none">
        <div class="text-h5 bold-font">Profession</div>
        <div>{{ Role }}</div>
        <div> {{ Company }}</div>
        <div class="bold-font">------------------------------------------------</div>
        <div class="text-h5 bold-font">Personal Detail</div>
        <div>{{ Dob }}</div>
        <div>{{ City }}</div>
        <div>{{ Contact }}</div>

      </q-card-section>
    </q-card>

  </div>
  </q-page>
</template>



<script>
export default {
  setup () {
    return {
        MyPrincipal: '--Regression to the mean--',
      Role: 'Software Engineer',
      Dob : 'DOB : 02-02-2002',
      Company : 'LTIMindtree',
      Contact : 'Email-Id : ranjanriya01@gmail.com',
      City : 'Address : Patna, Bihar',
      about: 'A highly motivated and hardworking individual currently working under LTIMindtree.'
    }
  }
}
</script>

<style lang="scss" scoped>
    .mycard {
        width: 50%;
        background-color: beige;
        background-image: url(..//assets//bgpro.png);
       

    }
    .text-h3
    {
        width: 50%;
    }
    

    .bold-font{
        font-weight: bolder;
    }

    .place{
        align-items: center;
        text-align: center;
    }
    

    

</style>