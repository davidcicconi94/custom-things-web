import { Component } from '@angular/core';

import { SHARED_STANDALONE_IMPORTS } from '../../../shared/shared-standalone-imports';

@Component({
  selector: 'app-auth-layout',
  imports: [SHARED_STANDALONE_IMPORTS],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.scss'
})
export class AuthLayoutComponent {
}
