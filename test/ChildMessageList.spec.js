import { mount } from '@vue/test-utils'
import MessageList from '@/components/MessageList.vue'
import ChildMessageList from '@/components/ChildMessageList.vue'

describe('Parent is MessageList', () => {
  it('displays emitted! whent custom event is emitted', () => {
      const wrapper = mount(MessageList)
      wrapper.find(ChildMessageList).vm.$emit('custom')
      expect(wrapper.html()).toContain('Emitted!')
  })
})
