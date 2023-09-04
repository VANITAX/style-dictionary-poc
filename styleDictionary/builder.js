const StyleDictionary = require('style-dictionary');

console.log('Build started...');
console.log('\n==============================================');


// REGISTER THE CUSTOM TRANSFORMS

StyleDictionary.registerTransform({
  name: 'size/px', // notice: the name is an override of an existing predefined method (yes, you can do it)
  type: 'value',
  matcher: function(token) {
      // this is an example of a possible filter (based on the "cti" values) to show how a "matcher" works
      return token.attributes.category === 'font' || token.attributes.category === 'margin';
  },
  transformer: function(token) {
      return `${token.value}px`;
  }
});

// REGISTER THE CUSTOM TRANSFORM GROUPS

// if you want to see what a pre-defined group contains, uncomment the next line:
// console.log(StyleDictionary.transformGroup['group_name']);

StyleDictionary.registerTransformGroup({
  name: 'custom/web',
  // notice: here the "size/px" transform is not the pre-defined one, but the custom one we have declared above
  transforms: ['attribute/cti', 'name/cti/constant', 'size/px', 'color/css', 'time/seconds', 'ratio/%']
});


// APPLY THE CONFIGURATION
// IMPORTANT: the registration of custom transforms
// needs to be done _before_ applying the configuration
const StyleDictionaryExtended = StyleDictionary.extend(__dirname + '/config.json');


// FINALLY, BUILD ALL THE PLATFORMS
StyleDictionaryExtended.buildAllPlatforms();


console.log('\n==============================================');
console.log('\nBuild completed!');