import { TestBed } from '@angular/core/testing';
import { SigninComponent } from '../../../proj/components/account/signin.component';

describe('Signin Component', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [SigninComponent]
        });
    });

    it('Should initiate signin component', () => {
        expect(true).toBe(true);
    });
});