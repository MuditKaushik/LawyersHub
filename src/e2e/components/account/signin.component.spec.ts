import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { SigninComponent } from '../../../proj/components/account/signin.component';
import { ISigninModel } from '../../../proj/models/data-models';

let login: ISigninModel = {
    username: 'Mudit_Kaushik',
    password: 'mudit1'
};

describe('Signin Component', () => {
    let signinCompFixture: ComponentFixture<SigninComponent>;
    let signInTestComp: SigninComponent;
    beforeEach(async () => {
        TestBed.configureTestingModule({
            declarations: [SigninComponent]
        });
    });

    it('Should initiate signin component', () => {
        TestBed.configureTestingModule({
            declarations: [SigninComponent]
        }).compileComponents().then(() => {
            signinCompFixture = TestBed.createComponent(SigninComponent);
            signinCompFixture.detectChanges();
            signInTestComp = signinCompFixture.componentInstance;
            expect(signInTestComp).toBeDefined();
        });
    });
});