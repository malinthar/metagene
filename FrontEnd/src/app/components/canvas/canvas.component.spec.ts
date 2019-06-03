import { async, ComponentFixture, TestBed } from '@angular/core/testing';


import { CanvasComponent } from './canvas.component';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ScriptLoaderService } from 'src/app/services/script-loader.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import{DomSanitizer} from '@angular/platform-browser';
import { NgxSpinnerService} from 'ngx-spinner';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';


describe('CanvasComponent', () => {
  let component: CanvasComponent;
  let fixture: ComponentFixture<CanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,RouterTestingModule],
      declarations: [ CanvasComponent ],
      providers:[NgFlashMessageService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
