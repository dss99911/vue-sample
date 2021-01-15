<template>
  <div>
    <Property :msg="msg"/>

    <IfElse/>

    <!-- TODO how to load image by binding?-->
    <img src="./assets/logo.png"/>

    <!--Loop -->
    <ForLoop/>

    <UI/>

    <Event/>

    <Form/>

    <Computed/>
    <Syntex/>

    <Slot>
      Something inner
    </Slot>

  </div>
</template>
<script>
import Form from "@/Form";
import Event from "@/Event";
import Property from "@/Property";
import IfElse from "@/IfElse";
import ForLoop from "@/ForLoop";
import UI from "@/UI";
import Computed from "@/Computed";
import Syntex from "@/Syntex";
import Slot from "@/Slot";

export default {
  name: 'Sample',
  components: {Syntex, Computed, UI, ForLoop, IfElse, Property, Event, Form, Slot},
  data() {
    return {
      msg: "Sample"
    }
  },
}
</script>
