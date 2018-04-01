import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { SigninComponent } from '../../../proj/components/account/signin.component';
import { ISigninModel } from '../../../proj/models/data-models';

let login: ISigninModel = {
    username: 'Mudit_Kaushik',
    password: 'mudit1'
};

describe('Signin Component', () => {
    beforeEach(async () => {
        TestBed.configureTestingModule({
            declarations: [SigninComponent]
        });
    });

    it('Should initiate signin component', async () => {
        TestBed.compileComponents().then(async () => {
            let signinCompFixture = TestBed.createComponent(SigninComponent);
            let signInTestComp = signinCompFixture.debugElement.componentInstance;
            expect(signInTestComp).toBeTruthy();
        });
    });
});