import { mount } from '@vue/test-utils'
import MessageList from '@/components/MessageList.vue'

describe('Message.spec.js', () => {
  let cmp

  beforeEach(() => {
      cmp = mount(MessageList, {
          propsData: {
              messages: ["Test Ja Eiei"]
          }
      })
  })
  it('it received ["Test Ja Eiei"] props', () => {
      expect(cmp.vm.messages).toEqual(["Test Ja Eiei"])
  })
})
