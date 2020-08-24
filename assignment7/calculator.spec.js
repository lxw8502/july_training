describe('calculator.js', function(){
    let calculator;
    let calculator2;
    beforeEach(function(){
        calculator = new Calculator();
        calculator2 = new Calculator();
    })
    describe('calculator', function(){
        //Negative Matcher.
        it('should initialize the total', function(){
            expect(calculator.total).toBe(0);
            expect(calculator.total).toBeFalsy();
        })
        //toBeDefined, toBeUndefined
        it('should have common operations', function(){
            expect(calculator.exponent).toBeUndefined();
            expect(calculator.add).toBeDefined();
        });
        //toBeNull, toContain
        it('should overwrite total', function(){
            calculator.total = null;
            expect(calculator.total).toBeNull();
    
            expect(calculator.constructor.name).toContain("Calc");
        });
        //toBeNaN
        it('should overwrite total and have multiply operation', function(){
            calculator.total = 10;
            calculator.multiply('a')
    
            expect(calculator.total).toBeNaN();
        });
        //toThrow, toThrowError
        it('should handle divide by zero', function(){
            
            expect(function(){calculator.divide(0)}).toThrow();
            expect(function(){calculator.divide(0)}).toThrowError(Error);
            expect(function(){calculator.divide(0)}).toThrowError(Error, 'Cannot divide by zero');
        });
        //toMatch, Match anything
        it('returns total', function(){
            calculator.total = 50;
            expect(calculator.add(20)).toBe(70);
            expect(calculator.total).toMatch(/-?\d+/);
            expect(typeof calculator.total).toMatch('number');
    
            expect(typeof calculator.total).toEqual(jasmine.anything());
            
        })
    })
})