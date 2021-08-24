import React, { useState } from "react";
import { useSelector } from "react-redux";

import Tax from './Tax'
import Minnesota from './Minnesota'

function W4() {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'

  return (
    <div>
      <Tax />
    </div>
  );
}

export default W4;
