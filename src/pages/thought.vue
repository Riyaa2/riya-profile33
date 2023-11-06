<template>
     <div class="column justify-center items-center pos bgimage">
        <q-card class="mycard2">
            <div class="text-h3 bold-font">QUALIFICATION</div>
        </q-card>
     </div>

     <div class="q-pa-md">
    <q-table
      title="Qualification"
      :rows="rows"
      :columns="columns"
      row-key="name"
      class="bold-font"
    />
  </div>
  
  <div>

  </div>
</template>
<script>
const columns = [
  {
    name: 'name',
    required: true,
    label: 'Dessert (100g serving)',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'calories', align: 'center', label: 'Calories', field: 'calories', sortable: true },
  { name: 'fat', label: 'Fat (g)', field: 'fat', sortable: true },
  { name: 'carbs', label: 'Carbs (g)', field: 'carbs' },
  { name: 'protein', label: 'Protein (g)', field: 'protein' },
]

const rows = [
  {
    name: '10th',
    calories: '10 CGPA',
    fat: '2016',
    carbs: 'PCBM',
    protein: 'JNV Siwan'
  },
  {
    name: '12th',
    calories: '82.6 %',
    fat: '2018',
    carbs: 'PCM',
    protein: 'JNV Siwan'
  },
  {
    name: 'Graduation',
    calories: '2023',
    fat: '2023',
    carbs: 'B. Tech(ECE)',
    protein: 'SJBIT, Bangalore'
  },
  
 
 
  
]

export default {
  setup () {
    return {
      columns,
      rows
    }
  }
}
</script>
<style>
.mycard2{
    width: 50%;

}
.pos{
    align-items: center;
    
}
.bgimage{
    background-image: url(..//pages//qual.png);
    background-repeat: no-repeat;
    background-size: contain;

}
.bold-font{
    font-weight: bolder;
    text-align: center;
}
</style>