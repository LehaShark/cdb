/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var sql2 = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,39],$V1=[1,40],$V2=[23,24],$V3=[61,67],$V4=[1,4],$V5=[1,50],$V6=[1,53],$V7=[19,32,64],$V8=[4,17,19,27,32,40,51,64],$V9=[4,17,19,27,32,40,51,64,69],$Va=[2,58],$Vb=[4,17,19,27,32,40,51,64,73,74],$Vc=[1,83],$Vd=[1,84],$Ve=[1,85],$Vf=[1,88],$Vg=[4,51],$Vh=[1,95],$Vi=[1,96],$Vj=[4,51,64],$Vk=[4,64],$Vl=[1,109],$Vm=[19,64],$Vn=[4,19,51,54,55,64],$Vo=[4,54,55],$Vp=[4,51,54,55,64];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"sql":3,";":4,"statements":5,"ddl":6,"dml":7,"create_statement":8,"alter_statement":9,"select_statement":10,"insert_statement":11,"update_statement":12,"delete_statement":13,"create_keyword":14,"create_target":15,"simple_name_identifier":16,"(":17,"multi_identifier":18,")":19,"CREATE":20,"DEFINE":21,"DECLARE":22,"TABLE":23,"SCHEMA":24,"alter_keyword":25,"alter_target":26,"SET":27,"multi_expression":28,"ALTER":29,"CHANGE":30,"select_keyword":31,"FROM":32,"select_target":33,"condition_clause":34,"SELECT":35,"FETCH":36,"identifier":37,"insert_keyword":38,"insert_target":39,"VALUES":40,"multi_literal":41,"INSERT":42,"INTO":43,"update_keyword":44,"update_target":45,"expression":46,"UPDATE":47,"delete_keyword":48,"delete_target":49,"DELETE":50,"WHERE":51,"condition_part":52,"binary_expression":53,"AND":54,"OR":55,"unary_expression":56,"=":57,"literal":58,"COMPARISON":59,"NOT":60,"NAME":61,"!":62,"-":63,",":64,"ddl_identifier":65,"dml_identifier":66,"*":67,"alias_identifier":68,".":69,"AS":70,"type":71,"constraint":72,"UNIQUE":73,"BETWEEN":74,"INTEGER":75,"DOUBLE":76,"CHARACTER":77,"DECIMAL":78,"FLOAT":79,"DATETIME":80,"STRING":81,"INTNUM":82,"$accept":0,"$end":1},
terminals_: {2:"error",4:";",17:"(",19:")",20:"CREATE",21:"DEFINE",22:"DECLARE",23:"TABLE",24:"SCHEMA",27:"SET",29:"ALTER",30:"CHANGE",32:"FROM",35:"SELECT",36:"FETCH",40:"VALUES",42:"INSERT",43:"INTO",47:"UPDATE",50:"DELETE",51:"WHERE",54:"AND",55:"OR",57:"=",59:"COMPARISON",60:"NOT",61:"NAME",62:"!",63:"-",64:",",67:"*",69:".",70:"AS",73:"UNIQUE",74:"BETWEEN",75:"INTEGER",76:"DOUBLE",77:"CHARACTER",78:"DECIMAL",79:"FLOAT",80:"DATETIME",81:"STRING",82:"INTNUM"},
productions_: [0,[3,2],[3,2],[5,1],[5,1],[6,1],[6,1],[7,1],[7,1],[7,1],[7,1],[8,3],[8,6],[14,1],[14,1],[14,1],[15,1],[15,1],[9,5],[25,1],[25,1],[26,1],[26,1],[10,4],[10,5],[31,1],[31,1],[33,1],[11,6],[11,9],[38,1],[38,2],[39,1],[12,4],[12,5],[44,1],[45,1],[13,3],[13,4],[48,1],[49,1],[34,2],[52,1],[52,3],[52,3],[46,1],[46,1],[53,3],[53,3],[56,2],[56,2],[56,2],[28,3],[28,1],[18,3],[18,1],[37,1],[37,1],[16,1],[66,1],[66,1],[66,3],[66,1],[68,3],[65,2],[65,3],[72,1],[72,1],[71,1],[71,1],[71,1],[71,1],[71,1],[71,1],[41,3],[41,1],[58,1],[58,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 2:

            {
                yy.ast.setStatement($$[$0-1]);
            }
        
break;
case 11:

            {
                this.$ = new yy.scope.createStatement();
                this.$.setTarget($$[$0]);
            }
        
break;
case 12:

            {
                this.$ = new yy.scope.createStatement();
                this.$.setTarget($$[$0-3]);
                this.$.setColumns($$[$0-1]);
            }
        
break;
case 18:

            {
                this.$ = new yy.scope.alterStatement();
                this.$.setTarget($$[$0-2]);
                this.$.setExpressions($$[$0]);
            }
        
break;
case 23:
 
            {
                this.$ = new yy.scope.selectStatement();
                this.$.setColumns($$[$0-2]);
                this.$.setTarget($$[$0]);
            }
        
break;
case 24:
 
            {
                this.$ = new yy.scope.selectStatement();
                this.$.setColumns($$[$0-3]);
                this.$.setTarget($$[$0-1]);
                this.$.setWhere($$[$0]);
            }
        
break;
case 28:

            {
                this.$ = new yy.scope.insertStatement();
                this.$.setTarget($$[$0-4]);
                this.$.setValues($$[$0-1]);
            }
        
break;
case 29:

            {
                this.$ = new yy.scope.insertStatement();
                this.$.setTarget($$[$0-7]);
                this.$.setColumns($$[$0-5]);
                this.$.setValues($$[$0-1]);
            }
        
break;
case 33:

            {
                this.$ = new yy.scope.updateStatement();
                this.$.setTarget($$[$0-2]);
            }
        
break;
case 34:

            {
                this.$ = new yy.scope.updateStatement();
                this.$.setTarget($$[$0-3]);
                this.$.setWhere($$[$0]);
            }
        
break;
case 37:

            {
                this.$ = new yy.scope.deleteStatement();
                this.$.setTarget($$[$0]);
            }
        
break;
case 38:

            {
                this.$ = new yy.scope.deleteStatement();
                this.$.setTarget($$[$0-1]);
                this.$.setWhere($$[$0]);
            }
        
break;
case 41:

            {
                this.$ = $$[$0];
            }
        
break;
case 43: case 44:

            {
                this.$ = new yy.scope.binaryExpression({
                    lParam: $$[$0-1], rParam: $$[$01], operator: $$[$0]
                });
            }
        
break;
case 47: case 48:

            {
                this.$ = new yy.scope.binaryExpression({
                    lParam: $$[$0-2], rParam: $$[$0], operator: $$[$0-1]
                });
            }
        
break;
case 52: case 74:

            {
                this.$ = Array.isArray($$[$0-2]) ? $$[$0-2] : [$$[$0-2]];
                this.$.push($$[$0]);
            }
        
break;
case 54:

            {
                this.$ = Array.isArray($$[$0-2]) ? $$[$0-2] : [$$[$0-2]];
                $$[$0].setIndex(this.$.length || 0);
                this.$.push($$[$0]);
            }
        
break;
case 58:

            {
                this.$ = new yy.scope.identifier({ name: $$[$0] });
            }
        
break;
case 59:

            {
                this.$ = new yy.scope.identifier({ name: 'all', alias: '*' });
            }
        
break;
case 61:

            {
                this.$ = new yy.scope.identifier({ name: $$[$0], scope: $$[$0-2] })
            }
        
break;
case 63:

            {
                this.$ = new yy.scope.identifier({ name: $$[$0-2], alias: $$[$0] });
            }
        
break;
case 64:

            {
                this.$ = new yy.scope.typedIdentifier({ name: $$[$0-1], type: $$[$0] })
            }
        
break;
case 65:

            {
                this.$ = new yy.scope.typedIdentifier({ name: $$[$0-2], type: $$[$0-1] });
            }
        
break;
case 76:

            {
                this.$ = new yy.scope.literal($$[$0].substring(1, $$[$0].length - 1));
            }
        
break;
case 77:

            {
                this.$ = new yy.scope.literal($$[$0]);
            }
        
break;
}
},
table: [{3:1,5:2,6:3,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,20:[1,17],21:[1,18],22:[1,19],25:12,29:[1,20],30:[1,21],31:13,35:[1,22],36:[1,23],38:14,42:[1,24],44:15,47:[1,25],48:16,50:[1,26]},{1:[3],4:[1,27]},{4:[1,28]},{4:[2,3]},{4:[2,4]},{4:[2,5]},{4:[2,6]},{4:[2,7]},{4:[2,8]},{4:[2,9]},{4:[2,10]},{15:29,23:[1,30],24:[1,31]},{23:[1,33],24:[1,34],26:32},{16:42,18:35,37:36,61:$V0,65:37,66:38,67:$V1,68:41},{16:42,37:44,39:43,61:$V0,65:37,66:38,67:$V1,68:41},{16:42,37:46,45:45,61:$V0,65:37,66:38,67:$V1,68:41},{32:[1,47]},o($V2,[2,13]),o($V2,[2,14]),o($V2,[2,15]),o($V2,[2,19]),o($V2,[2,20]),o($V3,[2,25]),o($V3,[2,26]),o($V3,[2,30],{43:[1,48]}),o($V3,[2,35]),{32:[2,39]},o($V4,[2,1]),o($V4,[2,2]),{16:49,61:$V5},{61:[2,16]},{61:[2,17]},{16:51,61:$V5},{61:[2,21]},{61:[2,22]},{32:[1,52],64:$V6},o($V7,[2,55]),o($V8,[2,56]),o($V8,[2,57],{69:[1,54]}),o($V9,$Va,{71:55,70:[1,56],75:[1,57],76:[1,58],77:[1,59],78:[1,60],79:[1,61],80:[1,62]}),o($V9,[2,59]),o($V9,[2,60]),o($V9,[2,62]),{17:[1,64],40:[1,63]},o([17,40],[2,32]),{27:[1,65]},{27:[2,36]},{16:42,37:67,49:66,61:$V0,65:37,66:38,67:$V1,68:41},o($V3,[2,31]),{4:[2,11],17:[1,68]},o([4,17,19,27,32,40,51,57,59,64,69],$Va),{27:[1,69]},{16:42,33:70,37:71,61:$V0,65:37,66:38,67:$V1,68:41},{16:42,37:72,61:$V0,65:37,66:38,67:$V1,68:41},{16:73,61:$V5},o($V8,[2,64],{72:74,73:[1,75],74:[1,76]}),{61:[1,77]},o($Vb,[2,68]),o($Vb,[2,69]),o($Vb,[2,70]),o($Vb,[2,71]),o($Vb,[2,72]),o($Vb,[2,73]),{17:[1,78]},{16:42,18:79,37:36,61:$V0,65:37,66:38,67:$V1,68:41},{16:86,46:80,53:82,56:81,60:$Vc,61:$V5,62:$Vd,63:$Ve},{4:[2,37],34:87,51:$Vf},o($Vg,[2,40]),{16:42,18:89,37:36,61:$V0,65:37,66:38,67:$V1,68:41},{16:86,28:90,46:91,53:82,56:81,60:$Vc,61:$V5,62:$Vd,63:$Ve},{4:[2,23],34:92,51:$Vf},o($Vg,[2,27]),o($V7,[2,54]),o($V9,[2,61]),o($V8,[2,65]),o($V8,[2,66]),o($V8,[2,67]),o($V9,[2,63]),{41:93,58:94,81:$Vh,82:$Vi},{19:[1,97],64:$V6},{4:[2,33],34:98,51:$Vf},o($Vj,[2,45]),o($Vj,[2,46]),{61:[1,99]},{61:[1,100]},{61:[1,101]},{57:[1,102],59:[1,103]},{4:[2,38]},{16:86,52:104,53:105,61:$V5},{19:[1,106],64:$V6},{4:[2,18],64:[1,107]},o($Vk,[2,53]),{4:[2,24]},{19:[1,108],64:$Vl},o($Vm,[2,75]),o($Vn,[2,76]),o($Vn,[2,77]),{40:[1,110]},{4:[2,34]},o($Vj,[2,49]),o($Vj,[2,50]),o($Vj,[2,51]),{58:111,81:$Vh,82:$Vi},{58:112,81:$Vh,82:$Vi},{4:[2,41],54:[1,113],55:[1,114]},o($Vo,[2,42]),{4:[2,12]},{16:86,46:115,53:82,56:81,60:$Vc,61:$V5,62:$Vd,63:$Ve},{4:[2,28]},{58:116,81:$Vh,82:$Vi},{17:[1,117]},o($Vp,[2,47]),o($Vp,[2,48]),{16:86,53:118,61:$V5},{16:86,53:119,61:$V5},o($Vk,[2,52]),o($Vm,[2,74]),{41:120,58:94,81:$Vh,82:$Vi},o($Vo,[2,43]),o($Vo,[2,44]),{19:[1,121],64:$Vl},{4:[2,29]}],
defaultActions: {3:[2,3],4:[2,4],5:[2,5],6:[2,6],7:[2,7],8:[2,8],9:[2,9],10:[2,10],26:[2,39],30:[2,16],31:[2,17],33:[2,21],34:[2,22],46:[2,36],87:[2,38],92:[2,24],98:[2,34],106:[2,12],108:[2,28],121:[2,29]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:return 'ADA';
break;
case 1:return 'ALL';
break;
case 2:return 54;
break;
case 3:return 'AMMSC';
break;
case 4:return 'AMMSC';
break;
case 5:return 'AMMSC';
break;
case 6:return 'AMMSC';
break;
case 7:return 'AMMSC';
break;
case 8:return 'ANY';
break;
case 9:return 70;
break;
case 10:return 'ASC';
break;
case 11:return 'AUTHORIZATION';
break;
case 12:return 74;
break;
case 13:return 'BY';
break;
case 14:return 'C';
break;
case 15:return 77;
break;
case 16:return 'CHECK';
break;
case 17:return 'CLOSE';
break;
case 18:return 'COBOL';
break;
case 19:return 'COMMIT';
break;
case 20:return 'CONTINUE';
break;
case 21:return 20;
break;
case 22:return 'CURRENT';
break;
case 23:return 'CURSOR';
break;
case 24:return 80;
break;
case 25:return 'TIME';
break;
case 26:return 78;
break;
case 27:return 22;
break;
case 28:return 'DEFAULT';
break;
case 29:return 50;
break;
case 30:return 'DESC';
break;
case 31:return 'DISTINCT';
break;
case 32:return 76;
break;
case 33:return 'ESCAPE';
break;
case 34:return 'EXISTS';
break;
case 35:return 36;
break;
case 36:return 79;
break;
case 37:return 'FOR';
break;
case 38:return 'FOREIGN';
break;
case 39:return 'FORTRAN';
break;
case 40:return 'FOUND';
break;
case 41:return 32;
break;
case 42:return 'GRANT';
break;
case 43:return 'GROUP';
break;
case 44:return 'HAVING';
break;
case 45:return 'IN';
break;
case 46:return 'INDICATOR';
break;
case 47:return 42;
break;
case 48:return 75;
break;
case 49:return 43;
break;
case 50:return 'IS';
break;
case 51:return 'KEY';
break;
case 52:return 'LANGUAGE';
break;
case 53:return 'LIKE';
break;
case 54:return 'MODULE';
break;
case 55:return 60;
break;
case 56:return 'NULLX';
break;
case 57:return 'NUMERIC';
break;
case 58:return 'OF';
break;
case 59:return 'ON';
break;
case 60:return 'OPEN';
break;
case 61:return 'OPTION';
break;
case 62:return 55;
break;
case 63:return 'ORDER';
break;
case 64:return 'PASCAL';
break;
case 65:return 'PLI';
break;
case 66:return 'PRECISION';
break;
case 67:return 'PRIMARY';
break;
case 68:return 'PRIVILEGES';
break;
case 69:return 'PROCEDURE';
break;
case 70:return 'PUBLIC';
break;
case 71:return 'REAL';
break;
case 72:return 'REFERENCES';
break;
case 73:return 'ROLLBACK';
break;
case 74:return 24;
break;
case 75:return 35;
break;
case 76:return 27;
break;
case 77:return 'SMALLINT';
break;
case 78:return 'SOME';
break;
case 79:return 'SQLCODE';
break;
case 80:return 23;
break;
case 81:return 'TO';
break;
case 82:return 'UNION';
break;
case 83:return 73;
break;
case 84:return 47;
break;
case 85:return 'USER';
break;
case 86:return 40;
break;
case 87:return 'VIEW';
break;
case 88:return 'WHENEVER';
break;
case 89:return 51;
break;
case 90:return 'WITH';
break;
case 91:return 'WORK';
break;
case 92:/* ignore white spaces */
break;
case 93:/* ignore comments */
break;
case 94:return 59;
break;
case 95:return yy_.yytext;
break;
case 96:return 61;
break;
case 97:return 82;
break;
case 98:return 'APPROXNUM';
break;
case 99:return 81;
break;
}
},
rules: [/^(?:ADA\b)/,/^(?:ALL\b)/,/^(?:AND\b)/,/^(?:AVG\b)/,/^(?:MIN\b)/,/^(?:MAX\b)/,/^(?:SUM\b)/,/^(?:COUNT\b)/,/^(?:ANY\b)/,/^(?:AS\b)/,/^(?:ASC\b)/,/^(?:AUTHORIZATION\b)/,/^(?:BETWEEN\b)/,/^(?:BY\b)/,/^(?:C\b)/,/^(?:CHARACTER\b)/,/^(?:CHECK\b)/,/^(?:CLOSE\b)/,/^(?:COBOL\b)/,/^(?:COMMIT\b)/,/^(?:CONTINUE\b)/,/^(?:CREATE\b)/,/^(?:CURRENT\b)/,/^(?:CURSOR\b)/,/^(?:DATETIME\b)/,/^(?:TIME\b)/,/^(?:DECIMAL\b)/,/^(?:DECLARE\b)/,/^(?:DEFAULT\b)/,/^(?:DELETE\b)/,/^(?:DESC\b)/,/^(?:DISTINCT\b)/,/^(?:DOUBLE\b)/,/^(?:ESCAPE\b)/,/^(?:EXISTS\b)/,/^(?:FETCH\b)/,/^(?:FLOAT\b)/,/^(?:FOR\b)/,/^(?:FOREIGN\b)/,/^(?:FORTRAN\b)/,/^(?:FOUND\b)/,/^(?:FROM\b)/,/^(?:GRANT\b)/,/^(?:GROUP\b)/,/^(?:HAVING\b)/,/^(?:IN\b)/,/^(?:INDICATOR\b)/,/^(?:INSERT\b)/,/^(?:INTEGER\b)/,/^(?:INTO\b)/,/^(?:IS\b)/,/^(?:KEY\b)/,/^(?:LANGUAGE\b)/,/^(?:LIKE\b)/,/^(?:MODULE\b)/,/^(?:NOT\b)/,/^(?:NULL\b)/,/^(?:NUMERIC\b)/,/^(?:OF\b)/,/^(?:ON\b)/,/^(?:OPEN\b)/,/^(?:OPTION\b)/,/^(?:OR\b)/,/^(?:ORDER\b)/,/^(?:PASCAL\b)/,/^(?:PLI\b)/,/^(?:PRECISION\b)/,/^(?:PRIMARY\b)/,/^(?:PRIVILEGES\b)/,/^(?:PROCEDURE\b)/,/^(?:PUBLIC\b)/,/^(?:REAL\b)/,/^(?:REFERENCES\b)/,/^(?:ROLLBACK\b)/,/^(?:SCHEMA\b)/,/^(?:SELECT\b)/,/^(?:SET\b)/,/^(?:SMALLINT\b)/,/^(?:SOME\b)/,/^(?:SQLCODE\b)/,/^(?:TABLE\b)/,/^(?:TO\b)/,/^(?:UNION\b)/,/^(?:UNIQUE\b)/,/^(?:UPDATE\b)/,/^(?:USER\b)/,/^(?:VALUES\b)/,/^(?:VIEW\b)/,/^(?:WHENEVER\b)/,/^(?:WHERE\b)/,/^(?:WITH\b)/,/^(?:WORK\b)/,/^(?:([ \t\r\n]+))/,/^(?:(--.*$))/,/^(?:(==|<>|<|>|<=|>=))/,/^(?:(\*|,|;|\.|\(|\)|=))/,/^(?:([A-Za-z][A-Za-z0-9_]*)+)/,/^(?:([0-9]+|[0-9]+\.[0-9]*|\.[0-9]*))/,/^(?:([0-9]+[eE][+-]?[0-9]+|[0-9]+\.[0-9]*[eE][+-]?[0-9]+|\.[0-9]*[eE][+-]?[0-9]+))/,/^(?:(['\w'])+)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = sql2;
exports.Parser = sql2.Parser;
exports.parse = function () { return sql2.parse.apply(sql2, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}