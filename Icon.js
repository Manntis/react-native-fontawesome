import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

import Icons from './FontAwesomeIcons';
const IconTypes = {
  FAR: 'fa_regular_400',
  FAS: 'fa_solid_900',
  FAB: 'fa_brands_400'
}

const parseIconName = (iconName) => {
  if (!iconName) return;

  iconName = iconName.replace(/(fa\-)/gi, '')
  iconName = iconName.replace(/(fa|fas|far)( )/gi, '')

  let nameParts = iconName.match(/(\-)(\w{1,1})/gi) || []

  nameParts.forEach(m => {
    iconName = iconName.replace(m, m.toUpperCase())
  })

  iconName = iconName.replace(/\-/gi, '') 
  iconName = (iconName || '').trim()

  return Icons[iconName]
}

class Icon extends Component {
  setNativeProps(nativeProps) {
    this._root.setNativeProps(nativeProps);
  }

  render() {
    const { style, color, children, type, ...props } = this.props;
    const font = { fontFamily: type || IconTypes.FAS }

    return (
      <Text
        {...props}
        style={[styles.icon, { color }, style, font]}
        ref={component => this._root = component}
      >
        {children}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    backgroundColor: 'transparent'
  },
});

export { Icons, IconTypes, parseIconName };
export default Icon;
