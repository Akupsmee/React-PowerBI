import React, {forwardRef} from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional


// default
export const StringContent = () => (
  <Tippy content="Hello">
    <button>My button</button>
  </Tippy>
);

// tooltip properties
export const ArrowFalse = () => (
  <Tippy arrow = "false" delay = {1000} content="Hello">
    <button>Arrow will not show</button>
  </Tippy>
);

const JSXContent = () => <span style={{ color: "#f00" }}>Tooltip</span>;

// passing component
export const ColoredTooltip = () => (
  <Tippy content={<JSXContent />}>
    <button>My button 3</button>
  </Tippy>
);

const CustomChild = forwardRef((props,ref) => {
    return (
        <div ref={ref} style={{ color: "blue" }}>
      <div>first line</div>
      <div>second line</div>
    </div>
  );
});

//  passing custom tooltip and component
export const ColoredTooltip2 = () => (
  <Tippy content={<JSXContent />}>
    <CustomChild />
  </Tippy>
);
