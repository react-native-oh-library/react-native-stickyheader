'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _deprecatedReactNativePropTypes = require("deprecated-react-native-prop-types");
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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
  const [stickyLayoutY, setStickyLayoutY] = (0, _react.useState)(0);
  const _onLayout = (0, _react.useCallback)(event => {
    if (event && event.nativeEvent) {
      setStickyLayoutY(event.nativeEvent.layout.y);
    }
    onLayout && onLayout(event);
  }, [onLayout]);
  const translateY = (0, _react.useMemo)(() => {
    const y = stickyHeaderY !== -1 ? stickyHeaderY : stickyLayoutY;
    return stickyScrollY.interpolate({
      inputRange: [-1, 0, y, y + 1],
      outputRange: [0, 0, 0, 1]
    });
  }, [stickyHeaderY, stickyLayoutY, stickyScrollY]);
  return /*#__PURE__*/_react.default.createElement(_reactNative.Animated.View, _extends({
    ref: forwardedRef,
    onLayout: _onLayout,
    style: [style, styles.container, {
      transform: [{
        translateY
      }]
    }]
  }, otherProps), children);
}
const styles = _reactNative.StyleSheet.create({
  container: {
    position: "relative",
    zIndex: 100
  }
});
StickyHeader.propTypes = {
  style: _deprecatedReactNativePropTypes.ViewPropTypes.style,
  stickyHeaderY: _propTypes.default.number,
  stickyScrollY: _propTypes.default.any
};
StickyHeader.defaultProps = {
  stickyHeaderY: -1,
  stickyScrollY: new _reactNative.Animated.Value(0)
};
const MemoStickyHeader = /*#__PURE__*/_react.default.memo(StickyHeader);
const ForwardStickyHeader = /*#__PURE__*/_react.default.forwardRef((props, ref) => /*#__PURE__*/_react.default.createElement(MemoStickyHeader, _extends({
  forwardedRef: ref
}, props)));
ForwardStickyHeader.displayName = 'StickyHeader';
var _default = exports.default = ForwardStickyHeader;
//# sourceMappingURL=StickyHeader.js.map