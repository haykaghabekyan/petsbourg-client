import React from "react";
import { shallow } from "enzyme";
import AuthHeader from "./auth-header";


describe("AuthHeader", () => {
    it("should show sign in button when flag is true", () => {
        const component = shallow(<AuthHeader showSignIn={true} />);

        expect(component).toHaveLength(1);
    });
});
