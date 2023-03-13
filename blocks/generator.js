const tsl = new Blockly.Generator('TSL');
tsl.PRECEDENCE = 0

tsl['assumeguarantee'] = function(block) {
    var statements_assume = tsl.statementToCode(block, 'assume', tsl.PRECEDENCE);
    var statements_guarantee = tsl.statementToCode(block, 'guarantee', tsl.PRECEDENCE);
    var code = 'always assume {\n' + statements_assume + ';\n' + '}\nalways guarantee {\n' + statements_guarantee + ';\n}' ;
    return code;
};

tsl.scrub_ = function(block, code, thisOnly) {
    const nextBlock =
        block.nextConnection && block.nextConnection.targetBlock();
    if (nextBlock && !thisOnly) {
        return code + ';\n' + tsl.blockToCode(nextBlock);
    }
    return code;
};

tsl['new'] = function(block) {
    var dropdown_shapes = block.getFieldValue('shapes');
    var number_fst = block.getFieldValue('fst');
    var number_snd = block.getFieldValue('snd');
    var number_trd = block.getFieldValue('trd');
    var value_name = tsl.valueToCode(block, 'NAME', tsl.PRECEDENCE);
    var code = '( [ ' + dropdown_shapes + ' <- color ' + number_fst + ' ' +  number_snd + ' ' + number_trd + ' ] )';

    return [code, tsl.PRECEDENCE];
};

tsl['start'] = function(block) {
    var value_name = tsl.valueToCode(block, 'NAME', tsl.PRECEDENCE);
    var code = value_name;
    return code;
};

tsl['mut_ex'] = function(block) {
    var dropdown_in1 = block.getFieldValue('in1');
    var dropdown_in2 = block.getFieldValue('in2');
    var code = '! ( ' + dropdown_in1 + ' && ' + dropdown_in2 + ' )';
    return code;
};

tsl['logic_2input'] = function(block) {
    var value_left = tsl.valueToCode(block, 'left', tsl.PRECEDENCE);
    var dropdown_operator = block.getFieldValue('operator');
    var value_right = tsl.valueToCode(block, 'right', tsl.PRECEDENCE);
    var code = '( '+  value_left + ' ' + dropdown_operator + ' ' + value_right + ' )' ;

    return [code, tsl.PRECEDENCE];
};

tsl['logic_1input'] = function(block) {
    var dropdown_operator = block.getFieldValue('operator');
    var value_right = tsl.valueToCode(block, 'right', tsl.PRECEDENCE);
    var code = '( ' + dropdown_operator + ' ' + value_right + ' )';

    return [code, tsl.PRECEDENCE];
};

tsl['update_new'] = function(block) {
    var dropdown_outsignal = block.getFieldValue('outSignal');
    var dropdown_fxnterm = block.getFieldValue('fxnTerm');
    var value_name = tsl.valueToCode(block, 'NAME', tsl.PRECEDENCE);
    var code = '( [ ' + dropdown_outsignal + ' <- ' + dropdown_fxnterm + ' ] )' + value_name;

    return [code, tsl.PRECEDENCE];
};

tsl['update'] = function(block) {
    var value_name = tsl.valueToCode(block, 'NAME', tsl.PRECEDENCE);
    var value_right = tsl.valueToCode(block, 'right', tsl.PRECEDENCE);
    var code = '( [ ' + value_name + ' <- ' + value_right + ' ] )';

    return [code, tsl.PRECEDENCE];
};

tsl['sinsaw'] = function(block) {
    var dropdown_sin = block.getFieldValue('sin');
    var value_name = tsl.valueToCode(block, 'NAME', tsl.PRECEDENCE);
    var code = '( ' + dropdown_sin + ' ( ' + value_name + ' ) )';

    return [code, tsl.PRECEDENCE];
};

tsl['vars'] = function(block) {
    var dropdown_vars = block.getFieldValue('vars');
    var code = dropdown_vars;
    return [code, tsl.PRECEDENCE];
};

tsl['math'] = function(block) {
    var value_left = tsl.valueToCode(block, 'left', tsl.PRECEDENCE);
    var dropdown_ops = block.getFieldValue('ops');
    var value_right = tsl.valueToCode(block, 'right', tsl.PRECEDENCE);
    var code = '( ' + value_left + ' ' + dropdown_ops + ' ' + value_right + ' )';
    return [code, tsl.PRECEDENCE];
};

tsl['cube_rot'] = function(block) {
    var dropdown_cube = block.getFieldValue('cube_rot');
    var code = dropdown_cube;
    return [code, tsl.PRECEDENCE];
};

tsl['cube_pos'] = function(block) {
    var dropdown_cube = block.getFieldValue('cube_pos');
    var code = dropdown_cube;
    return [code, tsl.PRECEDENCE];
};

tsl['cube_scale'] = function(block) {
    var dropdown_cube = block.getFieldValue('cube_scale');
    var code = dropdown_cube;
    return [code, tsl.PRECEDENCE];
};

tsl['sphere_rot'] = function(block) {
    var dropdown_cube = block.getFieldValue('sphere_rot');
    var code = dropdown_cube;
    return [code, tsl.PRECEDENCE];
};

tsl['sphere_pos'] = function(block) {
    var dropdown_cube = block.getFieldValue('sphere_pos');
    var code = dropdown_cube;
    return [code, tsl.PRECEDENCE];
};

tsl['sphere_scale'] = function(block) {
    var dropdown_cube = block.getFieldValue('sphere_scale');
    var code = dropdown_cube;
    return [code, tsl.PRECEDENCE];
};

tsl['poly_rot'] = function(block) {
    var dropdown_cube = block.getFieldValue('poly_rot');
    var code = dropdown_cube;
    return [code, tsl.PRECEDENCE];
};

tsl['poly_pos'] = function(block) {
    var dropdown_cube = block.getFieldValue('poly_pos');
    var code = dropdown_cube;
    return [code, tsl.PRECEDENCE];
};

tsl['poly_scale'] = function(block) {
    var dropdown_cube = block.getFieldValue('poly_scale');
    var code = dropdown_cube;
    return [code, tsl.PRECEDENCE];
};

tsl['insignal'] = function(block) {
    var dropdown_sigin = block.getFieldValue('signIn');
    var code = dropdown_sigin;
    return [code, tsl.PRECEDENCE];
};

tsl['var_man'] = function(block) {
    var value_var = tsl.valueToCode(block, 'var', tsl.PRECEDENCE);
    var value_var1 = tsl.valueToCode(block, 'var1', tsl.PRECEDENCE);
    var dropdown_op = block.getFieldValue('op');
    var number_name = block.getFieldValue('NAME');
    var code = "( [" + value_var + " <- " + value_var1 + " " + dropdown_op + " " + number_name + " ] )";
    return [code, tsl.PRECEDENCE];
};