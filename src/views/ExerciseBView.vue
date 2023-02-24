<script setup>
import { ref } from 'vue'

const activeItem = ref(1)

const items = [
  {
    id: 1,
    title: "Section 1",
    content: "<p>Maecenas nec semper ante, pellentesque posuere lorem. Nullam ipsum massa, consequat eget urna ut, pulvinar dignissim lorem. Nulla facilisi. Nam mattis eleifend metus. Fusce at commodo lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus pellentesque elit sem, vel blandit posuere.</p>"
  },
  {
    id: 2,
    title: "Section 2",
    content: "<p>Mauris a orci sodales, scelerisque velit vitae, gravida nisl. Ut non laoreet eros, vel laoreet nisi. Praesent sed dolor dui. Proin non fringilla quam. Aliquam erat volutpat. Vestibulum vel arcu semper, lobortis turpis ac, ultricies nisi. Praesent id.</p>"
  },
  {
    id: 3,
    title: "Section 3",
    content: "<p>Sed elementum sapien ut sapien imperdiet, eu venenatis enim rhoncus. Praesent euismod tincidunt rhoncus. Duis cras amet:</p><ul><li>List item one</li><li>List item two</li><li>List item three</li></ul>"
  },
  {
    id: "4",
    title: "Section 4",
    content: "<p>Cras dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean lacinia mauris vel est.</p><p>Suspendisse eu nisl. Nullam ut libero. Integer dignissim consequat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>"
  }
]

const selectItem = (id) => {
  activeItem.value = id
}

// console.log(('b' + 'a' + + 'a' + 'a').toLowerCase())
// console.log((+ + 'a'))
</script>

<template>
  <div class="container py-3">
    <div class="d-none d-md-block">
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation" v-for="item in items" :key="item.id">
          <button class="nav-link" @click="selectItem(item.id)" :class="{ 'active': item.id === activeItem }">{{ item.title }}</button>
        </li>
      </ul>
      <div class="tab-content py-2" id="myTabContent">
        <div v-for="item in items" :key="item.id" class="tab-pane fade" :class="{ 'show active': item.id === activeItem }" tabindex="0"><div v-html="item.content"></div></div>
      </div>
    </div>

    <div class="accordion d-md-none" id="accordionExercise">
      <div class="accordion-item" v-for="item in items" :key="item.id">
        <h2 class="accordion-header" :id="`heading${item.id}`">
          <button class="accordion-button" @click="selectItem(item.id)" :class="{ 'collapsed': item.id !== activeItem }" type="button" data-bs-toggle="collapse" :data-bs-target="`#collapse${item.id}`" aria-expanded="false" :aria-controls="`collapse${item.id}`">
            {{ item.title }}
          </button>
        </h2>
        <div :id="`collapse${item.id}`" class="accordion-collapse collapse" :class="{ 'show': item.id === activeItem }" :aria-labelledby="`heading${item.id}`" data-bs-parent="#accordionExercise">
          <div class="accordion-body">
            <div v-html="item.content"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
