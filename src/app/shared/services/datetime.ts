import {Injectable, ModuleWithProviders, NgModule} from '@angular/core';
import {NgbDateAdapter, NgbDateParserFormatter, NgbDatepickerI18n, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {DateTimeAdapter, OWL_DATE_TIME_FORMATS, OWL_DATE_TIME_LOCALE, OwlDateTimeIntl, OwlDateTimeModule, OwlNativeDateTimeModule} from 'ng-pick-datetime';
import {MomentDateTimeAdapter} from 'ng-pick-datetime/date-time/adapter/moment-adapter/moment-date-time-adapter.class';
import {OwlMomentDateTimeModule} from 'ng-pick-datetime/date-time/adapter/moment-adapter/moment-date-time.module';
import {UtilMisc} from '@shared-utils/misc';

export class DateTimeUtil {
  static months = '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_');
  static monthsShort = '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_');
  static daysOfWeek = [
    {fullName: '周日', shortName: '日'},
    {fullName: '周一', shortName: '一'},
    {fullName: '周二', shortName: '二'},
    {fullName: '周三', shortName: '三'},
    {fullName: '周四', shortName: '四'},
    {fullName: '周五', shortName: '五'},
    {fullName: '周六', shortName: '六'}
  ];

  public static init() {

  }
}

@Injectable()
export class MyDatepickerI18n extends NgbDatepickerI18n {
  public getWeekdayShortName(weekday: number): string {
    return DateTimeUtil.daysOfWeek[weekday - 1].shortName;
  }

  getMonthShortName(month: number): string {
    return DateTimeUtil.monthsShort[month - 1];

  }

  getMonthFullName(month: number): string {
    return DateTimeUtil.months[month - 1];
  }

  getDayAriaLabel(date: NgbDateStruct): string {
    return `${date.year}-${date.month}-${date.day}`;
  }
}


@Injectable()
export class MyNgbDateParserFormatter extends NgbDateParserFormatter {
  parse(value: string): NgbDateStruct {
    const data = new Date(value);
    const ds: NgbDateStruct = {} as NgbDateStruct;

    if (data) {
      ds.year = data.getFullYear();
      ds.month = data.getMonth() + 1;
      ds.day = data.getDay();
    }

    return ds;
  }

  format(date: NgbDateStruct): string {
    if (date) {
      const d = new Date(date.year, date.month - 1, date.day);
      return UtilMisc.formatDate(d, 'yyyy-MM-dd');
    }
    return null;

  }
}

@Injectable()
export class MyDateAdapter extends NgbDateAdapter<any> {
  fromModel(value: any): NgbDateStruct {
    const data = new Date(value);
    const ds: NgbDateStruct = {} as NgbDateStruct;

    if (data) {
      ds.year = data.getFullYear();
      ds.month = data.getMonth() + 1;
      ds.day = data.getDate();
    }
    return ds;
  }

  toModel(date: NgbDateStruct): any {
    if (date) {
      const d = new Date(date.year, date.month - 1, date.day);
      return UtilMisc.formatDate(d, 'yyyy-MM-dd');
    }
    return null;
  }

}


export class MyOwlDateTimeIntl extends OwlDateTimeIntl {
  /** A label for the up second button (used by screen readers).  */
  upSecondLabel = 'Add a second';

  /** A label for the down second button (used by screen readers).  */
  downSecondLabel = 'Minus a second';

  /** A label for the up minute button (used by screen readers).  */
  upMinuteLabel = 'Add a minute';

  /** A label for the down minute button (used by screen readers).  */
  downMinuteLabel = 'Minus a minute';

  /** A label for the up hour button (used by screen readers).  */
  upHourLabel = 'Add a hour';

  /** A label for the down hour button (used by screen readers).  */
  downHourLabel = 'Minus a hour';

  /** A label for the previous month button (used by screen readers). */
  prevMonthLabel = 'Previous month';

  /** A label for the next month button (used by screen readers). */
  nextMonthLabel = 'Next month';

  /** A label for the previous year button (used by screen readers). */
  prevYearLabel = 'Previous year';

  /** A label for the next year button (used by screen readers). */
  nextYearLabel = 'Next year';

  /** A label for the previous multi-year button (used by screen readers). */
  prevMultiYearLabel = 'Previous 21 years';

  /** A label for the next multi-year button (used by screen readers). */
  nextMultiYearLabel = 'Next 21 years';

  /** A label for the 'switch to month view' button (used by screen readers). */
  switchToMonthViewLabel = 'Change to month view';

  /** A label for the 'switch to year view' button (used by screen readers). */
  switchToMultiYearViewLabel = 'Choose month and year';

  /** A label for the cancel button */
  cancelBtnLabel = '取消';

  /** A label for the set button */
  setBtnLabel = '确定';

  /** A label for the range 'from' in picker info */
  rangeFromLabel = 'From';

  /** A label for the range 'to' in picker info */
  rangeToLabel = 'To';

  /** A label for the hour12 button (AM) */
  hour12AMLabel = 'AM';

  /** A label for the hour12 button (PM) */
  hour12PMLabel = 'PM';
}

const myMomentFormatString = 'YYYY-MM-DD HH:mm';
export const MY_MOMENT_FORMATS = {
  parseInput: myMomentFormatString,
  fullPickerInput: myMomentFormatString,
  datePickerInput: myMomentFormatString,
  timePickerInput: myMomentFormatString,
  monthYearLabel: myMomentFormatString,
  dateA11yLabel: myMomentFormatString,
  monthYearA11yLabel: myMomentFormatString,
};


@NgModule({
  imports: [
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    OwlMomentDateTimeModule,
  ]
})
export class MyDateTimePickerModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MyDateTimePickerModule,
      providers: [
        {provide: OWL_DATE_TIME_LOCALE, useValue: 'zh-CN'},
        {provide: DateTimeAdapter, useClass: MomentDateTimeAdapter},
        {provide: OwlDateTimeIntl, useClass: MyOwlDateTimeIntl},
        {provide: OWL_DATE_TIME_FORMATS, useValue: MY_MOMENT_FORMATS},
      ]
    };
  }
}
