import moment from 'moment';

export const getErrorMessage = (field,errors ) => {
    // interagates the errors object for related messages.
    if ( errors ){
      let messages = [];
      if ( Array.isArray(field) ){
        field.map(function(v, index){
          if ( errors.hasOwnProperty(v) ){ messages.push(errors[v].join()); }
        })
      }else{
        if ( errors.hasOwnProperty(field) ){ messages.push(errors[field].join()); }
      }
      return messages.join();
    }
  }

  export const confirmConstraints = (state, constraints) => {
    //console.log("@@@ STATE BEING PASSED IN IS: \n", state)
    //console.log("@@@ CONSTRAINTS PASSED IN ARE: ", constraints)
    let validationResult = {}
    for (let constraint in constraints) {
      if (!constraints[constraint] || constraint === undefined) {
        //console.log("@@@ constraint or constraints[constraint] is falsy")
        continue;
      }
      let currentStateVal = state[constraint]
      //console.log("@@@ VALIDATING FOR CONSTRAINT FIELD",constraint)
      //console.log("@@@ STATE VALUE",currentStateVal)
  
      if (constraints[constraint].hasOwnProperty('presence')) {
        if (!currentStateVal || Array.isArray(currentStateVal) && currentStateVal.length < 1) {
          //console.log(constraint,"fails presence validation")
          validationResult[constraint] = [constraints[constraint]['presence']['message']];
          continue;
        }
      }
  
      if (constraints[constraint].hasOwnProperty('format')) {
        let expr;
        //console.log("THE FLAG BEING PASSED IN IS: ", constraints[constraint]['format']['pattern'])
  
        if (constraints[constraint]['format']['flag']) {
          expr = `${constraints[constraint]['format']['pattern']}`
          expr = RegExp(expr, constraints[constraint]['format']['flag']);
        } else {
          expr = `${constraints[constraint]['format']['pattern']}`
          expr = RegExp(expr);
        }
        if (!(currentStateVal instanceof Array) && !expr.test(currentStateVal)) {
          //console.log(constraint,"fails format validation")
          validationResult[constraint] = [constraints[constraint]['format']['message']]
          continue;
        }
      }
  
      /* DEV NOTE: Currently the range is hard-coded between now and 125 years in the past - 
                   this should be refactored to used provided "earliest" and "latest" constraint.datetime properties */
      if (constraints[constraint].hasOwnProperty('datetime')) {
        var c = constraints[constraint]['datetime'];
  
        if ( c.hasOwnProperty('earliest')){
            //console.log("CHECKING DATE FOR EARLIEST VALUES");
            var e = moment(c['earliest']);
            var l = moment(c['latest']);
            var v = moment(currentStateVal);
            //console.log("earliest:",e.format("L"));
            //console.log("latest:",l.format("L"));
            //console.log("current:",v.format("L"));
            //console.log("isBetween:",v.isBetween(e,l,'minute'));
            //console.log("isSameOrAfter:",v.isSameOrAfter(e));
  
            if ( !v.isBetween(e,l,'minute') ){
              validationResult[constraint] = [constraints[constraint]['datetime']['message']]
              continue;
            }
        }else{
          if (!moment(currentStateVal).isBetween(moment().subtract(125,'year'), moment())) {
            //console.log(constraint,"fails datetime validation")
            validationResult[constraint] = [constraints[constraint]['datetime']['message']]
            continue;
          }
        }
      }
  
      if (constraints[constraint].hasOwnProperty('numericality')) {
        // this only validates ranges. not all options are here.
        /*
        //console.log("numericality CHECK::",currentStateVal);
        //console.log("   lessThan:",constraints[constraint]["numericality"]['lessThan']);
        //console.log("   lessThanOrEqualTo:",constraints[constraint]["numericality"]['lessThanOrEqualTo']);
        //console.log("   greaterThan:",constraints[constraint]["numericality"]['greaterThan']);
        //console.log("   greaterThanOrEqualTo:",constraints[constraint]["numericality"]['greaterThanOrEqualTo']);
        */
        var min = 0;
        var max = Number.POSITIVE_INFINITY;
        var v = Number.parseInt(currentStateVal);
        if (Number.isNaN(v)) {
          validationResult[constraint] = [constraints[constraint]['numericality']['message']]
          continue;
        }else{
            if ( constraints[constraint]["numericality"].hasOwnProperty('greaterThan') || constraints[constraint]["numericality"].hasOwnProperty('greaterThanOrEqualTo')){
              min = Number(constraints[constraint]["numericality"].hasOwnProperty('greaterThan')? constraints[constraint]["numericality"]['greaterThan']:constraints[constraint]["numericality"]['greaterThanOrEqualTo']);
            }
            if ( constraints[constraint]["numericality"].hasOwnProperty('lessThan') || constraints[constraint]["numericality"].hasOwnProperty('lessThanOrEqualTo')){
              max = Number(constraints[constraint]["numericality"].hasOwnProperty('lessThan')? constraints[constraint]["numericality"]['lessThan']:constraints[constraint]["numericality"]['lessThanOrEqualTo']);
            }
            //console.log("COMPARING NUMERIC CONSTRAINT ", v, min, max);
            if ( v < min || v > max ){
              validationResult[constraint] = [constraints[constraint]['numericality']['message']]
            }else{
              continue
            }
        }
      }
  
      if (constraints[constraint].hasOwnProperty('message')) {
        validationResult[constraint] = [constraints[constraint]['message']['message']]
        continue;
      }
  
      //in the case all validation constraint cases pass, delete the property from our validationResult object
      //because it will eventually be turned into an object of errors
      //console.log(constraint,"passes all validation")
    }
  
    return (Object.keys(validationResult).length === 0)?null:validationResult;
  }