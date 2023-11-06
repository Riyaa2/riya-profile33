<template >
    <div class="column justify-center items-center">
        <q-card class="mycard2 ">
            
            

            <q-card-section class="q-pt-none">
                <div class="text-h3 bold-font">Technology:-</div>
                <div class="text-h6 bold-font">{{ Tech1 }}</div>
                <div class="text-h6 bold-font">{{ Tech2 }}</div>
                <br />
                
                <br />
                <div class="text-h3 bold-font">Personal Interest:-</div>
                <br/>
                <div class="text-h6 bold-font">{{ theory }}</div>
                <br/>
                <div class="text-h6 bold-font ">{{ Personal1 }}</div>
                <div class="text-h6 bold-font" >{{ Personal2 }}</div>
                <div class="text-h6 bold-font">{{ Personal3 }}</div>
            </q-card-section>
        </q-card>
    </div>
</template>

<script>
export default {
  setup () {
    return {
      Tech1 : '1. Python  ',
      Tech2 : '2. VueJs',
      Personal1 : '1. Drawing',
      Personal2 : '2. Reading',
      Personal3 : '3. Photography',
      theory : '-----------------Changes like the weather------------------'
    }
  }
}
</script>

<style>
.bold-font {
    font-weight: bolder;
    text-align: center;
    padding: 5px;
    
}
.mycard2{
    width: 100%;
    height: 100%;
    background-color: beige;
}
.align{
    text-align: center;
}
.image{
    
    width: 10%; 
    height:10% ;

}



</style>