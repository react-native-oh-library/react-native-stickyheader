'use strict';

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useMemo, useState, useCallback } from 'react';
import { StyleSheet, Animated } from 'react-native';
import { ViewPropTypes } from 'deprecated-react-native-prop-types';
import PropTypes from 'prop-types';
function StickyHeader(props) {
  const {
    stickyHeaderY,
    stickyScrollY,
    children,
    style,
    forwardedRef,
    onLayout,
    ...otherProps
  } = props;
  const [stickyLayoutY, setStickyLayoutY] = useState(0);
  const _onLayout = useCallback(event => {
    if (event && event.nativeEvent) {
      setStickyLayoutY(event.nativeEvent.layout.y);
    }
    onLayout && onLayout(event);
  }, [onLayout]);
  const translateY = useMemo(() => {
    const y = stickyHeaderY !== -1 ? stickyHeaderY : stickyLayoutY;
    return stickyScrollY.interpolate({
      inputRange: [-1, 0, y, y + 1],
      outputRange: [0, 0, 0, 1]
    });
  }, [stickyHeaderY, stickyLayoutY, stickyScrollY]);
  return /*#__PURE__*/React.createElement(Animated.View, _extends({
    ref: forwardedRef,
    onLayout: _onLayout,
    style: [style, styles.container, {
      transform: [{
        translateY
      }]
    }]
  }, otherProps), children);
}
const styles = StyleSheet.create({
  container: {
    position: "relative",
    zIndex: 100
  }
});
StickyHeader.propTypes = {
  style: ViewPropTypes.style,
  stickyHeaderY: PropTypes.number,
  stickyScrollY: PropTypes.any
};
StickyHeader.defaultProps = {
  stickyHeaderY: -1,
  stickyScrollY: new Animated.Value(0)
};
const MemoStickyHeader = /*#__PURE__*/React.memo(StickyHeader);
const ForwardStickyHeader = /*#__PURE__*/React.forwardRef((props, ref) => /*#__PURE__*/React.createElement(MemoStickyHeader, _extends({
  forwardedRef: ref
}, props)));
ForwardStickyHeader.displayName = 'StickyHeader';
export default ForwardStickyHeader;
//# sourceMappingURL=StickyHeader.js.map