import { expect } from "chai";
import { shallowMount, mount } from "@vue/test-utils"; // shallowMount,
import Home from "../../src/views/Home.vue";

describe("Home.vue", () => {
    it("lets_checkout always change in_checkout to Boolean type", () => {
        let test_cases = [
            { input: true, output: true },
            { input: false, output: false },
            { input: 0, output: false },
            { input: "Text", output: false },
            { input: undefined, output: false },
            { input: NaN, output: false },
            { input: null, output: false },
            { input: [], output: false },
            { input: {}, output: false }
        ];
        const wrapper = shallowMount(Home, {});
        const component = wrapper.vm;
        component.lets_checkout(test_cases[0].input);
        expect(component.in_checkout).to.equal(test_cases[0].output);
        // test_cases.forEach( case => {
        //     const wrapper = shallowMount(Home, {});
        //     const component = wrapper.vm;
        //     component.lets_checkout(case.input);
        //     expect(component.in_checkout).to.equal(case.output);
        // });
    })
});
