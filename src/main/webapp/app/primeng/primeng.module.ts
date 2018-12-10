import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { BlogButtonDemoModule } from './buttons/button/buttondemo.module';
import { BlogSplitbuttonDemoModule } from './buttons/splitbutton/splitbuttondemo.module';

import { BlogDialogDemoModule } from './overlay/dialog/dialogdemo.module';
import { BlogConfirmDialogDemoModule } from './overlay/confirmdialog/confirmdialogdemo.module';
import { BlogLightboxDemoModule } from './overlay/lightbox/lightboxdemo.module';
import { BlogTooltipDemoModule } from './overlay/tooltip/tooltipdemo.module';
import { BlogOverlayPanelDemoModule } from './overlay/overlaypanel/overlaypaneldemo.module';
import { BlogSideBarDemoModule } from './overlay/sidebar/sidebardemo.module';

import { BlogKeyFilterDemoModule } from './inputs/keyfilter/keyfilterdemo.module';
import { BlogInputTextDemoModule } from './inputs/inputtext/inputtextdemo.module';
import { BlogInputTextAreaDemoModule } from './inputs/inputtextarea/inputtextareademo.module';
import { BlogInputGroupDemoModule } from './inputs/inputgroup/inputgroupdemo.module';
import { BlogCalendarDemoModule } from './inputs/calendar/calendardemo.module';
import { BlogCheckboxDemoModule } from './inputs/checkbox/checkboxdemo.module';
import { BlogChipsDemoModule } from './inputs/chips/chipsdemo.module';
import { BlogColorPickerDemoModule } from './inputs/colorpicker/colorpickerdemo.module';
import { BlogInputMaskDemoModule } from './inputs/inputmask/inputmaskdemo.module';
import { BlogInputSwitchDemoModule } from './inputs/inputswitch/inputswitchdemo.module';
import { BlogPasswordIndicatorDemoModule } from './inputs/passwordindicator/passwordindicatordemo.module';
import { BlogAutoCompleteDemoModule } from './inputs/autocomplete/autocompletedemo.module';
import { BlogSliderDemoModule } from './inputs/slider/sliderdemo.module';
import { BlogSpinnerDemoModule } from './inputs/spinner/spinnerdemo.module';
import { BlogRatingDemoModule } from './inputs/rating/ratingdemo.module';
import { BlogSelectDemoModule } from './inputs/select/selectdemo.module';
import { BlogSelectButtonDemoModule } from './inputs/selectbutton/selectbuttondemo.module';
import { BlogListboxDemoModule } from './inputs/listbox/listboxdemo.module';
import { BlogRadioButtonDemoModule } from './inputs/radiobutton/radiobuttondemo.module';
import { BlogToggleButtonDemoModule } from './inputs/togglebutton/togglebuttondemo.module';
import { BlogEditorDemoModule } from './inputs/editor/editordemo.module';

import { BlogMessagesDemoModule } from './messages/messages/messagesdemo.module';
import { BlogToastDemoModule } from './messages/toast/toastdemo.module';
import { BlogGalleriaDemoModule } from './multimedia/galleria/galleriademo.module';

import { BlogFileUploadDemoModule } from './fileupload/fileupload/fileuploaddemo.module';

import { BlogAccordionDemoModule } from './panel/accordion/accordiondemo.module';
import { BlogPanelDemoModule } from './panel/panel/paneldemo.module';
import { BlogTabViewDemoModule } from './panel/tabview/tabviewdemo.module';
import { BlogFieldsetDemoModule } from './panel/fieldset/fieldsetdemo.module';
import { BlogToolbarDemoModule } from './panel/toolbar/toolbardemo.module';
import { BlogScrollPanelDemoModule } from './panel/scrollpanel/scrollpaneldemo.module';
import { BlogCardDemoModule } from './panel/card/carddemo.module';
import { BlogFlexGridDemoModule } from './panel/flexgrid/flexgriddemo.module';

import { BlogTableDemoModule } from './data/table/tabledemo.module';
import { BlogVirtualScrollerDemoModule } from './data/virtualscroller/virtualscrollerdemo.module';
import { BlogPickListDemoModule } from './data/picklist/picklistdemo.module';
import { BlogOrderListDemoModule } from './data/orderlist/orderlistdemo.module';
import { BlogFullCalendarDemoModule } from './data/fullcalendar/fullcalendardemo.module';
import { BlogTreeDemoModule } from './data/tree/treedemo.module';
import { BlogTreeTableDemoModule } from './data/treetable/treetabledemo.module';
import { BlogPaginatorDemoModule } from './data/paginator/paginatordemo.module';
import { BlogGmapDemoModule } from './data/gmap/gmapdemo.module';
import { BlogOrgChartDemoModule } from './data/orgchart/orgchartdemo.module';
import { BlogCarouselDemoModule } from './data/carousel/carouseldemo.module';
import { BlogDataViewDemoModule } from './data/dataview/dataviewdemo.module';

import { BlogBarchartDemoModule } from './charts/barchart/barchartdemo.module';
import { BlogDoughnutchartDemoModule } from './charts/doughnutchart/doughnutchartdemo.module';
import { BlogLinechartDemoModule } from './charts/linechart/linechartdemo.module';
import { BlogPiechartDemoModule } from './charts/piechart/piechartdemo.module';
import { BlogPolarareachartDemoModule } from './charts/polarareachart/polarareachartdemo.module';
import { BlogRadarchartDemoModule } from './charts/radarchart/radarchartdemo.module';

import { BlogDragDropDemoModule } from './dragdrop/dragdrop/dragdropdemo.module';

import { BlogMenuDemoModule } from './menu/menu/menudemo.module';
import { BlogContextMenuDemoModule } from './menu/contextmenu/contextmenudemo.module';
import { BlogPanelMenuDemoModule } from './menu/panelmenu/panelmenudemo.module';
import { BlogStepsDemoModule } from './menu/steps/stepsdemo.module';
import { BlogTieredMenuDemoModule } from './menu/tieredmenu/tieredmenudemo.module';
import { BlogBreadcrumbDemoModule } from './menu/breadcrumb/breadcrumbdemo.module';
import { BlogMegaMenuDemoModule } from './menu/megamenu/megamenudemo.module';
import { BlogMenuBarDemoModule } from './menu/menubar/menubardemo.module';
import { BlogSlideMenuDemoModule } from './menu/slidemenu/slidemenudemo.module';
import { BlogTabMenuDemoModule } from './menu/tabmenu/tabmenudemo.module';

import { BlogBlockUIDemoModule } from './misc/blockui/blockuidemo.module';
import { BlogCaptchaDemoModule } from './misc/captcha/captchademo.module';
import { BlogDeferDemoModule } from './misc/defer/deferdemo.module';
import { BlogInplaceDemoModule } from './misc/inplace/inplacedemo.module';
import { BlogProgressBarDemoModule } from './misc/progressbar/progressbardemo.module';
import { BlogRTLDemoModule } from './misc/rtl/rtldemo.module';
import { BlogTerminalDemoModule } from './misc/terminal/terminaldemo.module';
import { BlogValidationDemoModule } from './misc/validation/validationdemo.module';
import { BlogProgressSpinnerDemoModule } from './misc/progressspinner/progressspinnerdemo.module';

@NgModule({
    imports: [
        BlogMenuDemoModule,
        BlogContextMenuDemoModule,
        BlogPanelMenuDemoModule,
        BlogStepsDemoModule,
        BlogTieredMenuDemoModule,
        BlogBreadcrumbDemoModule,
        BlogMegaMenuDemoModule,
        BlogMenuBarDemoModule,
        BlogSlideMenuDemoModule,
        BlogTabMenuDemoModule,

        BlogBlockUIDemoModule,
        BlogCaptchaDemoModule,
        BlogDeferDemoModule,
        BlogInplaceDemoModule,
        BlogProgressBarDemoModule,
        BlogInputMaskDemoModule,
        BlogRTLDemoModule,
        BlogTerminalDemoModule,
        BlogValidationDemoModule,

        BlogButtonDemoModule,
        BlogSplitbuttonDemoModule,

        BlogInputTextDemoModule,
        BlogInputTextAreaDemoModule,
        BlogInputGroupDemoModule,
        BlogCalendarDemoModule,
        BlogChipsDemoModule,
        BlogInputMaskDemoModule,
        BlogInputSwitchDemoModule,
        BlogPasswordIndicatorDemoModule,
        BlogAutoCompleteDemoModule,
        BlogSliderDemoModule,
        BlogSpinnerDemoModule,
        BlogRatingDemoModule,
        BlogSelectDemoModule,
        BlogSelectButtonDemoModule,
        BlogListboxDemoModule,
        BlogRadioButtonDemoModule,
        BlogToggleButtonDemoModule,
        BlogEditorDemoModule,
        BlogColorPickerDemoModule,
        BlogCheckboxDemoModule,
        BlogKeyFilterDemoModule,

        BlogMessagesDemoModule,
        BlogToastDemoModule,
        BlogGalleriaDemoModule,

        BlogFileUploadDemoModule,

        BlogAccordionDemoModule,
        BlogPanelDemoModule,
        BlogTabViewDemoModule,
        BlogFieldsetDemoModule,
        BlogToolbarDemoModule,
        BlogScrollPanelDemoModule,
        BlogCardDemoModule,
        BlogFlexGridDemoModule,

        BlogBarchartDemoModule,
        BlogDoughnutchartDemoModule,
        BlogLinechartDemoModule,
        BlogPiechartDemoModule,
        BlogPolarareachartDemoModule,
        BlogRadarchartDemoModule,

        BlogDragDropDemoModule,

        BlogDialogDemoModule,
        BlogConfirmDialogDemoModule,
        BlogLightboxDemoModule,
        BlogTooltipDemoModule,
        BlogOverlayPanelDemoModule,
        BlogSideBarDemoModule,

        BlogTableDemoModule,
        BlogDataViewDemoModule,
        BlogVirtualScrollerDemoModule,
        BlogFullCalendarDemoModule,
        BlogOrderListDemoModule,
        BlogPickListDemoModule,
        BlogTreeDemoModule,
        BlogTreeTableDemoModule,
        BlogPaginatorDemoModule,
        BlogOrgChartDemoModule,
        BlogGmapDemoModule,
        BlogCarouselDemoModule,
        BlogProgressSpinnerDemoModule
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BlogprimengModule {}
