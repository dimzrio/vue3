<template>
  <div id="app">
    <!-- inject form component -->
    <dimz-form>
      <div class="help">
        <p>This is some help text.</p>
      </div>
      <div class="fields">
        <input type="text" placeholder="email">
        <input type="text" placeholder="username">
        <input type="password" placeholder="password">
      </div>
      <div class="buttons">
        <button type="submit">Submit</button>
      </div>
    </dimz-form>

    <!-- default form components -->
    <dimz-form></dimz-form>

    <!-- slot name -->
    <slot-form>
      <template v-slot:help>
        <p>This is slot name help text.</p>
      </template>

      <template v-slot:fields>
        <input type="text" placeholder="username">
        <input type="password" placeholder="password">
      </template>

      <template v-slot:buttons>
        <button type="submit">Login</button>
      </template>
    
    </slot-form>
  </div>
</template>
<script>

import dimzForm from './components/DimzForm.vue';
import slotForm from './components/SlotNameForm.vue';

export default{
  name: 'App',
  components: {
    dimzForm,
    slotForm,
  }
}
</script>

