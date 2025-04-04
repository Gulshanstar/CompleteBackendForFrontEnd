
// function module(){
//     console.log("Hey module")
// }

// module()

// Jaise ki humhe pata functions and variable globally accessable hotta hai
// Lakin isme ek problem hai suppose ki apke pass do alag file me same name ka variable se 
// function bana hua hai then yahan pe override ho jayega 
// ----- then isse bachne ke liye humlog use karte me node me modularity concepts.

// lakin app chahate hai ki nhi mai access kar sakoon then app export ka use kar sakte hai.

console.log(module)
// output of console.log(module)

// {
//     id: '.',
//     path: '/Users/gulshanmundri/Documents/BackendForFrontEnd/CompleteBackendForFrontEnd/NodeModular',
//     exports: {},
//     filename: '/Users/gulshanmundri/Documents/BackendForFrontEnd/CompleteBackendForFrontEnd/NodeModular/moduleAndGlobalObject.js',
//     loaded: false,
//     children: [],
//     paths: [
//       '/Users/gulshanmundri/Documents/BackendForFrontEnd/CompleteBackendForFrontEnd/NodeModular/node_modules',
//       '/Users/gulshanmundri/Documents/BackendForFrontEnd/CompleteBackendForFrontEnd/node_modules',
//       '/Users/gulshanmundri/Documents/BackendForFrontEnd/node_modules',
//       '/Users/gulshanmundri/Documents/node_modules',
//       '/Users/gulshanmundri/node_modules',
//       '/Users/node_modules',
//       '/node_modules'
//     ],
//     [Symbol(kIsMainSymbol)]: true,
//     [Symbol(kIsCachedByESMLoader)]: false,
//     [Symbol(kIsExecuting)]: true
//   }