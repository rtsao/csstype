export interface StandardProperties<TLength = string | number> {
  alignContent?: AlignContentProperty;
  alignItems?: AlignItemsProperty;
  alignSelf?: AlignSelfProperty;
  animation?: AnimationProperty;
  animationDelay?: AllString;
  animationDirection?: AnimationDirectionProperty;
  animationDuration?: AllString;
  animationFillMode?: AnimationFillModeProperty;
  animationIterationCount?: AnimationIterationCountProperty;
  animationName?: AnimationNameProperty;
  animationPlayState?: AnimationPlayStateProperty;
  animationTimingFunction?: AnimationTimingFunctionProperty;
  appearance?: AppearanceProperty;
  azimuth?: AzimuthProperty;
  backdropFilter?: BackdropFilterProperty;
  backfaceVisibility?: BackfaceVisibilityProperty;
  background?: AllString;
  backgroundAttachment?: BackgroundAttachmentProperty;
  backgroundBlendMode?: BackgroundBlendModeProperty;
  backgroundClip?: BackgroundClipProperty;
  backgroundColor?: BackgroundColorProperty;
  backgroundImage?: BackgroundImageProperty;
  backgroundOrigin?: BackgroundOriginProperty;
  backgroundPosition?: AllString;
  backgroundPositionX?: AllString;
  backgroundPositionY?: AllString;
  backgroundRepeat?: BackgroundRepeatProperty;
  backgroundSize?: BackgroundSizeProperty<TLength>;
  blockSize?: AllString;
  border?: BorderProperty<TLength>;
  borderBlockEnd?: AllString;
  borderBlockEndColor?: AllString;
  borderBlockEndStyle?: AllString;
  borderBlockEndWidth?: AllString;
  borderBlockStart?: AllString;
  borderBlockStartColor?: AllString;
  borderBlockStartStyle?: AllString;
  borderBlockStartWidth?: AllString;
  borderBottom?: BorderBottomProperty<TLength>;
  borderBottomColor?: BorderBottomColorProperty;
  borderBottomLeftRadius?: BorderBottomLeftRadiusProperty<TLength>;
  borderBottomRightRadius?: BorderBottomRightRadiusProperty<TLength>;
  borderBottomStyle?: BorderBottomStyleProperty;
  borderBottomWidth?: BorderBottomWidthProperty<TLength>;
  borderCollapse?: BorderCollapseProperty;
  borderColor?: BorderColorProperty;
  borderImage?: AllString;
  borderImageOutset?: BorderImageOutsetProperty<TLength>;
  borderImageRepeat?: BorderImageRepeatProperty;
  borderImageSlice?: AllString;
  borderImageSource?: BorderImageSourceProperty;
  borderImageWidth?: BorderImageWidthProperty<TLength>;
  borderInlineEnd?: AllString;
  borderInlineEndColor?: AllString;
  borderInlineEndStyle?: AllString;
  borderInlineEndWidth?: AllString;
  borderInlineStart?: AllString;
  borderInlineStartColor?: AllString;
  borderInlineStartStyle?: AllString;
  borderInlineStartWidth?: AllString;
  borderLeft?: BorderLeftProperty<TLength>;
  borderLeftColor?: BorderLeftColorProperty;
  borderLeftStyle?: BorderLeftStyleProperty;
  borderLeftWidth?: BorderLeftWidthProperty<TLength>;
  borderRadius?: BorderRadiusProperty<TLength>;
  borderRight?: BorderRightProperty<TLength>;
  borderRightColor?: BorderRightColorProperty;
  borderRightStyle?: BorderRightStyleProperty;
  borderRightWidth?: BorderRightWidthProperty<TLength>;
  borderSpacing?: AllString;
  borderStyle?: BorderStyleProperty;
  borderTop?: BorderTopProperty<TLength>;
  borderTopColor?: BorderTopColorProperty;
  borderTopLeftRadius?: BorderTopLeftRadiusProperty<TLength>;
  borderTopRightRadius?: BorderTopRightRadiusProperty<TLength>;
  borderTopStyle?: BorderTopStyleProperty;
  borderTopWidth?: BorderTopWidthProperty<TLength>;
  borderWidth?: BorderWidthProperty<TLength>;
  bottom?: BottomProperty<TLength>;
  boxAlign?: BoxAlignProperty;
  boxDecorationBreak?: BoxDecorationBreakProperty;
  boxDirection?: BoxDirectionProperty;
  boxFlex?: AllNumber;
  boxFlexGroup?: AllNumber;
  boxLines?: BoxLinesProperty;
  boxOrdinalGroup?: AllNumber;
  boxOrient?: BoxOrientProperty;
  boxPack?: BoxPackProperty;
  boxShadow?: BoxShadowProperty;
  boxSizing?: BoxSizingProperty;
  breakAfter?: BreakAfterProperty;
  breakBefore?: BreakBeforeProperty;
  breakInside?: BreakInsideProperty;
  captionSide?: CaptionSideProperty;
  caretColor?: CaretColorProperty;
  clear?: ClearProperty;
  clip?: ClipProperty;
  clipPath?: ClipPathProperty;
  color?: ColorProperty;
  columnCount?: ColumnCountProperty;
  columnFill?: ColumnFillProperty;
  columnGap?: ColumnGapProperty<TLength>;
  columnRule?: AllString;
  columnRuleColor?: ColumnRuleColorProperty;
  columnRuleStyle?: AllString;
  columnRuleWidth?: AllString;
  columnSpan?: ColumnSpanProperty;
  columnWidth?: ColumnWidthProperty<TLength>;
  columns?: AllString;
  contain?: ContainProperty;
  content?: ContentProperty;
  counterIncrement?: CounterIncrementProperty;
  counterReset?: CounterResetProperty;
  cursor?: CursorProperty;
  direction?: DirectionProperty;
  display?: DisplayProperty;
  displayInside?: DisplayInsideProperty;
  displayList?: DisplayListProperty;
  displayOutside?: DisplayOutsideProperty;
  emptyCells?: EmptyCellsProperty;
  filter?: FilterProperty;
  flex?: FlexProperty;
  flexBasis?: FlexBasisProperty;
  flexDirection?: FlexDirectionProperty;
  flexFlow?: AllString;
  flexGrow?: AllNumber;
  flexShrink?: AllNumber;
  flexWrap?: FlexWrapProperty;
  float?: FloatProperty;
  font?: FontProperty;
  fontFamily?: FontFamilyProperty;
  fontFeatureSettings?: FontFeatureSettingsProperty;
  fontKerning?: FontKerningProperty;
  fontLanguageOverride?: FontLanguageOverrideProperty;
  fontVariationSettings?: FontVariationSettingsProperty;
  fontSize?: FontSizeProperty<TLength>;
  fontSizeAdjust?: FontSizeAdjustProperty;
  fontStretch?: FontStretchProperty;
  fontStyle?: FontStyleProperty;
  fontSynthesis?: FontSynthesisProperty;
  fontVariant?: FontVariantProperty;
  fontVariantAlternates?: FontVariantAlternatesProperty;
  fontVariantCaps?: FontVariantCapsProperty;
  fontVariantEastAsian?: FontVariantEastAsianProperty;
  fontVariantLigatures?: FontVariantLigaturesProperty;
  fontVariantNumeric?: FontVariantNumericProperty;
  fontVariantPosition?: FontVariantPositionProperty;
  fontWeight?: FontWeightProperty;
  grid?: AllString;
  gridArea?: GridAreaProperty;
  gridAutoColumns?: AllString;
  gridAutoFlow?: GridAutoFlowProperty;
  gridAutoRows?: AllString;
  gridColumn?: GridColumnProperty;
  gridColumnEnd?: GridColumnEndProperty;
  gridColumnGap?: GridColumnGapProperty<TLength>;
  gridColumnStart?: GridColumnStartProperty;
  gridGap?: AllString;
  gridRow?: GridRowProperty;
  gridRowEnd?: GridRowEndProperty;
  gridRowGap?: GridRowGapProperty<TLength>;
  gridRowStart?: GridRowStartProperty;
  gridTemplate?: GridTemplateProperty;
  gridTemplateAreas?: GridTemplateAreasProperty;
  gridTemplateColumns?: GridTemplateColumnsProperty;
  gridTemplateRows?: GridTemplateRowsProperty;
  hangingPunctuation?: HangingPunctuationProperty;
  height?: AllString;
  hyphens?: HyphensProperty;
  imageOrientation?: ImageOrientationProperty;
  imageRendering?: ImageRenderingProperty;
  imageResolution?: AllString;
  imeMode?: ImeModeProperty;
  initialLetter?: InitialLetterProperty;
  initialLetterAlign?: InitialLetterAlignProperty;
  inlineSize?: AllString;
  isolation?: IsolationProperty;
  justifyContent?: JustifyContentProperty;
  left?: LeftProperty<TLength>;
  letterSpacing?: LetterSpacingProperty<TLength>;
  lineBreak?: LineBreakProperty;
  lineHeight?: LineHeightProperty<TLength>;
  lineHeightStep?: LineHeightStepProperty<TLength>;
  listStyle?: AllString;
  listStyleImage?: ListStyleImageProperty;
  listStylePosition?: ListStylePositionProperty;
  listStyleType?: ListStyleTypeProperty;
  margin?: MarginProperty<TLength>;
  marginBlockEnd?: AllString;
  marginBlockStart?: AllString;
  marginBottom?: MarginBottomProperty<TLength>;
  marginInlineEnd?: AllString;
  marginInlineStart?: AllString;
  marginLeft?: MarginLeftProperty<TLength>;
  marginRight?: MarginRightProperty<TLength>;
  marginTop?: MarginTopProperty<TLength>;
  mask?: MaskProperty<TLength>;
  maskBorder?: AllString;
  maskBorderMode?: MaskBorderModeProperty;
  maskBorderOutset?: MaskBorderOutsetProperty<TLength>;
  maskBorderRepeat?: MaskBorderRepeatProperty;
  maskBorderSlice?: AllString;
  maskBorderSource?: MaskBorderSourceProperty;
  maskBorderWidth?: MaskBorderWidthProperty<TLength>;
  maskClip?: MaskClipProperty;
  maskComposite?: MaskCompositeProperty;
  maskImage?: MaskImageProperty;
  maskMode?: MaskModeProperty;
  maskOrigin?: MaskOriginProperty;
  maskPosition?: AllString;
  maskRepeat?: MaskRepeatProperty;
  maskSize?: MaskSizeProperty<TLength>;
  maskType?: MaskTypeProperty;
  maxBlockSize?: AllString;
  maxHeight?: MaxHeightProperty<TLength>;
  maxInlineSize?: AllString;
  maxWidth?: MaxWidthProperty<TLength>;
  minBlockSize?: AllString;
  minHeight?: MinHeightProperty<TLength>;
  minInlineSize?: AllString;
  minWidth?: MinWidthProperty<TLength>;
  mixBlendMode?: MixBlendModeProperty;
  objectFit?: ObjectFitProperty;
  objectPosition?: AllString;
  offset?: AllString;
  offsetAnchor?: OffsetAnchorProperty;
  offsetBlockEnd?: AllString;
  offsetBlockStart?: AllString;
  offsetInlineEnd?: AllString;
  offsetInlineStart?: AllString;
  offsetDistance?: OffsetDistanceProperty<TLength>;
  offsetPath?: OffsetPathProperty;
  offsetPosition?: OffsetPositionProperty;
  offsetRotate?: OffsetRotateProperty;
  opacity?: AllNumber;
  order?: AllNumber;
  orphans?: AllNumber;
  outline?: AllString;
  outlineColor?: OutlineColorProperty;
  outlineOffset?: OutlineOffsetProperty<TLength>;
  outlineStyle?: OutlineStyleProperty;
  outlineWidth?: OutlineWidthProperty<TLength>;
  overflow?: OverflowProperty;
  overflowClipBox?: OverflowClipBoxProperty;
  overflowWrap?: OverflowWrapProperty;
  overflowX?: OverflowXProperty;
  overflowY?: OverflowYProperty;
  padding?: PaddingProperty<TLength>;
  paddingBlockEnd?: AllString;
  paddingBlockStart?: AllString;
  paddingBottom?: PaddingBottomProperty<TLength>;
  paddingInlineEnd?: AllString;
  paddingInlineStart?: AllString;
  paddingLeft?: PaddingLeftProperty<TLength>;
  paddingRight?: PaddingRightProperty<TLength>;
  paddingTop?: PaddingTopProperty<TLength>;
  pageBreakAfter?: PageBreakAfterProperty;
  pageBreakBefore?: PageBreakBeforeProperty;
  pageBreakInside?: PageBreakInsideProperty;
  perspective?: PerspectiveProperty<TLength>;
  perspectiveOrigin?: AllString;
  pointerEvents?: PointerEventsProperty;
  position?: PositionProperty;
  quotes?: QuotesProperty;
  resize?: ResizeProperty;
  right?: RightProperty<TLength>;
  rubyAlign?: RubyAlignProperty;
  rubyMerge?: RubyMergeProperty;
  rubyPosition?: RubyPositionProperty;
  scrollBehavior?: ScrollBehaviorProperty;
  scrollSnapCoordinate?: ScrollSnapCoordinateProperty;
  scrollSnapDestination?: AllString;
  scrollSnapPointsX?: ScrollSnapPointsXProperty;
  scrollSnapPointsY?: ScrollSnapPointsYProperty;
  scrollSnapType?: ScrollSnapTypeProperty;
  scrollSnapTypeX?: ScrollSnapTypeXProperty;
  scrollSnapTypeY?: ScrollSnapTypeYProperty;
  shapeImageThreshold?: AllNumber;
  shapeMargin?: ShapeMarginProperty<TLength>;
  shapeOutside?: ShapeOutsideProperty;
  tabSize?: TabSizeProperty<TLength>;
  tableLayout?: TableLayoutProperty;
  textAlign?: TextAlignProperty;
  textAlignLast?: TextAlignLastProperty;
  textCombineUpright?: TextCombineUprightProperty;
  textDecoration?: AllString;
  textDecorationColor?: TextDecorationColorProperty;
  textDecorationLine?: TextDecorationLineProperty;
  textDecorationSkip?: TextDecorationSkipProperty;
  textDecorationSkipInk?: TextDecorationSkipInkProperty;
  textDecorationStyle?: TextDecorationStyleProperty;
  textEmphasis?: AllString;
  textEmphasisColor?: TextEmphasisColorProperty;
  textEmphasisPosition?: AllString;
  textEmphasisStyle?: TextEmphasisStyleProperty;
  textIndent?: AllString;
  textJustify?: TextJustifyProperty;
  textOrientation?: TextOrientationProperty;
  textOverflow?: TextOverflowProperty;
  textRendering?: TextRenderingProperty;
  textShadow?: TextShadowProperty;
  textSizeAdjust?: TextSizeAdjustProperty;
  textTransform?: TextTransformProperty;
  textUnderlinePosition?: TextUnderlinePositionProperty;
  top?: TopProperty<TLength>;
  touchAction?: TouchActionProperty;
  transform?: TransformProperty;
  transformBox?: TransformBoxProperty;
  transformOrigin?: AllString;
  transformStyle?: TransformStyleProperty;
  transition?: TransitionProperty;
  transitionDelay?: AllString;
  transitionDuration?: AllString;
  transitionProperty?: TransitionPropertyProperty;
  transitionTimingFunction?: TransitionTimingFunctionProperty;
  unicodeBidi?: UnicodeBidiProperty;
  userSelect?: UserSelectProperty;
  verticalAlign?: VerticalAlignProperty<TLength>;
  visibility?: VisibilityProperty;
  whiteSpace?: WhiteSpaceProperty;
  widows?: AllNumber;
  width?: AllString;
  willChange?: WillChangeProperty;
  wordBreak?: WordBreakProperty;
  wordSpacing?: WordSpacingProperty<TLength>;
  wordWrap?: WordWrapProperty;
  writingMode?: WritingModeProperty;
  zIndex?: ZIndexProperty;
}

export interface StandardPropertiesHyphen<TLength = string | number> {
  "align-content"?: AlignContentProperty;
  "align-items"?: AlignItemsProperty;
  "align-self"?: AlignSelfProperty;
  animation?: AnimationProperty;
  "animation-delay"?: AllString;
  "animation-direction"?: AnimationDirectionProperty;
  "animation-duration"?: AllString;
  "animation-fill-mode"?: AnimationFillModeProperty;
  "animation-iteration-count"?: AnimationIterationCountProperty;
  "animation-name"?: AnimationNameProperty;
  "animation-play-state"?: AnimationPlayStateProperty;
  "animation-timing-function"?: AnimationTimingFunctionProperty;
  appearance?: AppearanceProperty;
  azimuth?: AzimuthProperty;
  "backdrop-filter"?: BackdropFilterProperty;
  "backface-visibility"?: BackfaceVisibilityProperty;
  background?: AllString;
  "background-attachment"?: BackgroundAttachmentProperty;
  "background-blend-mode"?: BackgroundBlendModeProperty;
  "background-clip"?: BackgroundClipProperty;
  "background-color"?: BackgroundColorProperty;
  "background-image"?: BackgroundImageProperty;
  "background-origin"?: BackgroundOriginProperty;
  "background-position"?: AllString;
  "background-position-x"?: AllString;
  "background-position-y"?: AllString;
  "background-repeat"?: BackgroundRepeatProperty;
  "background-size"?: BackgroundSizeProperty<TLength>;
  "block-size"?: AllString;
  border?: BorderProperty<TLength>;
  "border-block-end"?: AllString;
  "border-block-end-color"?: AllString;
  "border-block-end-style"?: AllString;
  "border-block-end-width"?: AllString;
  "border-block-start"?: AllString;
  "border-block-start-color"?: AllString;
  "border-block-start-style"?: AllString;
  "border-block-start-width"?: AllString;
  "border-bottom"?: BorderBottomProperty<TLength>;
  "border-bottom-color"?: BorderBottomColorProperty;
  "border-bottom-left-radius"?: BorderBottomLeftRadiusProperty<TLength>;
  "border-bottom-right-radius"?: BorderBottomRightRadiusProperty<TLength>;
  "border-bottom-style"?: BorderBottomStyleProperty;
  "border-bottom-width"?: BorderBottomWidthProperty<TLength>;
  "border-collapse"?: BorderCollapseProperty;
  "border-color"?: BorderColorProperty;
  "border-image"?: AllString;
  "border-image-outset"?: BorderImageOutsetProperty<TLength>;
  "border-image-repeat"?: BorderImageRepeatProperty;
  "border-image-slice"?: AllString;
  "border-image-source"?: BorderImageSourceProperty;
  "border-image-width"?: BorderImageWidthProperty<TLength>;
  "border-inline-end"?: AllString;
  "border-inline-end-color"?: AllString;
  "border-inline-end-style"?: AllString;
  "border-inline-end-width"?: AllString;
  "border-inline-start"?: AllString;
  "border-inline-start-color"?: AllString;
  "border-inline-start-style"?: AllString;
  "border-inline-start-width"?: AllString;
  "border-left"?: BorderLeftProperty<TLength>;
  "border-left-color"?: BorderLeftColorProperty;
  "border-left-style"?: BorderLeftStyleProperty;
  "border-left-width"?: BorderLeftWidthProperty<TLength>;
  "border-radius"?: BorderRadiusProperty<TLength>;
  "border-right"?: BorderRightProperty<TLength>;
  "border-right-color"?: BorderRightColorProperty;
  "border-right-style"?: BorderRightStyleProperty;
  "border-right-width"?: BorderRightWidthProperty<TLength>;
  "border-spacing"?: AllString;
  "border-style"?: BorderStyleProperty;
  "border-top"?: BorderTopProperty<TLength>;
  "border-top-color"?: BorderTopColorProperty;
  "border-top-left-radius"?: BorderTopLeftRadiusProperty<TLength>;
  "border-top-right-radius"?: BorderTopRightRadiusProperty<TLength>;
  "border-top-style"?: BorderTopStyleProperty;
  "border-top-width"?: BorderTopWidthProperty<TLength>;
  "border-width"?: BorderWidthProperty<TLength>;
  bottom?: BottomProperty<TLength>;
  "box-align"?: BoxAlignProperty;
  "box-decoration-break"?: BoxDecorationBreakProperty;
  "box-direction"?: BoxDirectionProperty;
  "box-flex"?: AllNumber;
  "box-flex-group"?: AllNumber;
  "box-lines"?: BoxLinesProperty;
  "box-ordinal-group"?: AllNumber;
  "box-orient"?: BoxOrientProperty;
  "box-pack"?: BoxPackProperty;
  "box-shadow"?: BoxShadowProperty;
  "box-sizing"?: BoxSizingProperty;
  "break-after"?: BreakAfterProperty;
  "break-before"?: BreakBeforeProperty;
  "break-inside"?: BreakInsideProperty;
  "caption-side"?: CaptionSideProperty;
  "caret-color"?: CaretColorProperty;
  clear?: ClearProperty;
  clip?: ClipProperty;
  "clip-path"?: ClipPathProperty;
  color?: ColorProperty;
  "column-count"?: ColumnCountProperty;
  "column-fill"?: ColumnFillProperty;
  "column-gap"?: ColumnGapProperty<TLength>;
  "column-rule"?: AllString;
  "column-rule-color"?: ColumnRuleColorProperty;
  "column-rule-style"?: AllString;
  "column-rule-width"?: AllString;
  "column-span"?: ColumnSpanProperty;
  "column-width"?: ColumnWidthProperty<TLength>;
  columns?: AllString;
  contain?: ContainProperty;
  content?: ContentProperty;
  "counter-increment"?: CounterIncrementProperty;
  "counter-reset"?: CounterResetProperty;
  cursor?: CursorProperty;
  direction?: DirectionProperty;
  display?: DisplayProperty;
  "display-inside"?: DisplayInsideProperty;
  "display-list"?: DisplayListProperty;
  "display-outside"?: DisplayOutsideProperty;
  "empty-cells"?: EmptyCellsProperty;
  filter?: FilterProperty;
  flex?: FlexProperty;
  "flex-basis"?: FlexBasisProperty;
  "flex-direction"?: FlexDirectionProperty;
  "flex-flow"?: AllString;
  "flex-grow"?: AllNumber;
  "flex-shrink"?: AllNumber;
  "flex-wrap"?: FlexWrapProperty;
  float?: FloatProperty;
  font?: FontProperty;
  "font-family"?: FontFamilyProperty;
  "font-feature-settings"?: FontFeatureSettingsProperty;
  "font-kerning"?: FontKerningProperty;
  "font-language-override"?: FontLanguageOverrideProperty;
  "font-variation-settings"?: FontVariationSettingsProperty;
  "font-size"?: FontSizeProperty<TLength>;
  "font-size-adjust"?: FontSizeAdjustProperty;
  "font-stretch"?: FontStretchProperty;
  "font-style"?: FontStyleProperty;
  "font-synthesis"?: FontSynthesisProperty;
  "font-variant"?: FontVariantProperty;
  "font-variant-alternates"?: FontVariantAlternatesProperty;
  "font-variant-caps"?: FontVariantCapsProperty;
  "font-variant-east-asian"?: FontVariantEastAsianProperty;
  "font-variant-ligatures"?: FontVariantLigaturesProperty;
  "font-variant-numeric"?: FontVariantNumericProperty;
  "font-variant-position"?: FontVariantPositionProperty;
  "font-weight"?: FontWeightProperty;
  grid?: AllString;
  "grid-area"?: GridAreaProperty;
  "grid-auto-columns"?: AllString;
  "grid-auto-flow"?: GridAutoFlowProperty;
  "grid-auto-rows"?: AllString;
  "grid-column"?: GridColumnProperty;
  "grid-column-end"?: GridColumnEndProperty;
  "grid-column-gap"?: GridColumnGapProperty<TLength>;
  "grid-column-start"?: GridColumnStartProperty;
  "grid-gap"?: AllString;
  "grid-row"?: GridRowProperty;
  "grid-row-end"?: GridRowEndProperty;
  "grid-row-gap"?: GridRowGapProperty<TLength>;
  "grid-row-start"?: GridRowStartProperty;
  "grid-template"?: GridTemplateProperty;
  "grid-template-areas"?: GridTemplateAreasProperty;
  "grid-template-columns"?: GridTemplateColumnsProperty;
  "grid-template-rows"?: GridTemplateRowsProperty;
  "hanging-punctuation"?: HangingPunctuationProperty;
  height?: AllString;
  hyphens?: HyphensProperty;
  "image-orientation"?: ImageOrientationProperty;
  "image-rendering"?: ImageRenderingProperty;
  "image-resolution"?: AllString;
  "ime-mode"?: ImeModeProperty;
  "initial-letter"?: InitialLetterProperty;
  "initial-letter-align"?: InitialLetterAlignProperty;
  "inline-size"?: AllString;
  isolation?: IsolationProperty;
  "justify-content"?: JustifyContentProperty;
  left?: LeftProperty<TLength>;
  "letter-spacing"?: LetterSpacingProperty<TLength>;
  "line-break"?: LineBreakProperty;
  "line-height"?: LineHeightProperty<TLength>;
  "line-height-step"?: LineHeightStepProperty<TLength>;
  "list-style"?: AllString;
  "list-style-image"?: ListStyleImageProperty;
  "list-style-position"?: ListStylePositionProperty;
  "list-style-type"?: ListStyleTypeProperty;
  margin?: MarginProperty<TLength>;
  "margin-block-end"?: AllString;
  "margin-block-start"?: AllString;
  "margin-bottom"?: MarginBottomProperty<TLength>;
  "margin-inline-end"?: AllString;
  "margin-inline-start"?: AllString;
  "margin-left"?: MarginLeftProperty<TLength>;
  "margin-right"?: MarginRightProperty<TLength>;
  "margin-top"?: MarginTopProperty<TLength>;
  mask?: MaskProperty<TLength>;
  "mask-border"?: AllString;
  "mask-border-mode"?: MaskBorderModeProperty;
  "mask-border-outset"?: MaskBorderOutsetProperty<TLength>;
  "mask-border-repeat"?: MaskBorderRepeatProperty;
  "mask-border-slice"?: AllString;
  "mask-border-source"?: MaskBorderSourceProperty;
  "mask-border-width"?: MaskBorderWidthProperty<TLength>;
  "mask-clip"?: MaskClipProperty;
  "mask-composite"?: MaskCompositeProperty;
  "mask-image"?: MaskImageProperty;
  "mask-mode"?: MaskModeProperty;
  "mask-origin"?: MaskOriginProperty;
  "mask-position"?: AllString;
  "mask-repeat"?: MaskRepeatProperty;
  "mask-size"?: MaskSizeProperty<TLength>;
  "mask-type"?: MaskTypeProperty;
  "max-block-size"?: AllString;
  "max-height"?: MaxHeightProperty<TLength>;
  "max-inline-size"?: AllString;
  "max-width"?: MaxWidthProperty<TLength>;
  "min-block-size"?: AllString;
  "min-height"?: MinHeightProperty<TLength>;
  "min-inline-size"?: AllString;
  "min-width"?: MinWidthProperty<TLength>;
  "mix-blend-mode"?: MixBlendModeProperty;
  "object-fit"?: ObjectFitProperty;
  "object-position"?: AllString;
  offset?: AllString;
  "offset-anchor"?: OffsetAnchorProperty;
  "offset-block-end"?: AllString;
  "offset-block-start"?: AllString;
  "offset-inline-end"?: AllString;
  "offset-inline-start"?: AllString;
  "offset-distance"?: OffsetDistanceProperty<TLength>;
  "offset-path"?: OffsetPathProperty;
  "offset-position"?: OffsetPositionProperty;
  "offset-rotate"?: OffsetRotateProperty;
  opacity?: AllNumber;
  order?: AllNumber;
  orphans?: AllNumber;
  outline?: AllString;
  "outline-color"?: OutlineColorProperty;
  "outline-offset"?: OutlineOffsetProperty<TLength>;
  "outline-style"?: OutlineStyleProperty;
  "outline-width"?: OutlineWidthProperty<TLength>;
  overflow?: OverflowProperty;
  "overflow-clip-box"?: OverflowClipBoxProperty;
  "overflow-wrap"?: OverflowWrapProperty;
  "overflow-x"?: OverflowXProperty;
  "overflow-y"?: OverflowYProperty;
  padding?: PaddingProperty<TLength>;
  "padding-block-end"?: AllString;
  "padding-block-start"?: AllString;
  "padding-bottom"?: PaddingBottomProperty<TLength>;
  "padding-inline-end"?: AllString;
  "padding-inline-start"?: AllString;
  "padding-left"?: PaddingLeftProperty<TLength>;
  "padding-right"?: PaddingRightProperty<TLength>;
  "padding-top"?: PaddingTopProperty<TLength>;
  "page-break-after"?: PageBreakAfterProperty;
  "page-break-before"?: PageBreakBeforeProperty;
  "page-break-inside"?: PageBreakInsideProperty;
  perspective?: PerspectiveProperty<TLength>;
  "perspective-origin"?: AllString;
  "pointer-events"?: PointerEventsProperty;
  position?: PositionProperty;
  quotes?: QuotesProperty;
  resize?: ResizeProperty;
  right?: RightProperty<TLength>;
  "ruby-align"?: RubyAlignProperty;
  "ruby-merge"?: RubyMergeProperty;
  "ruby-position"?: RubyPositionProperty;
  "scroll-behavior"?: ScrollBehaviorProperty;
  "scroll-snap-coordinate"?: ScrollSnapCoordinateProperty;
  "scroll-snap-destination"?: AllString;
  "scroll-snap-points-x"?: ScrollSnapPointsXProperty;
  "scroll-snap-points-y"?: ScrollSnapPointsYProperty;
  "scroll-snap-type"?: ScrollSnapTypeProperty;
  "scroll-snap-type-x"?: ScrollSnapTypeXProperty;
  "scroll-snap-type-y"?: ScrollSnapTypeYProperty;
  "shape-image-threshold"?: AllNumber;
  "shape-margin"?: ShapeMarginProperty<TLength>;
  "shape-outside"?: ShapeOutsideProperty;
  "tab-size"?: TabSizeProperty<TLength>;
  "table-layout"?: TableLayoutProperty;
  "text-align"?: TextAlignProperty;
  "text-align-last"?: TextAlignLastProperty;
  "text-combine-upright"?: TextCombineUprightProperty;
  "text-decoration"?: AllString;
  "text-decoration-color"?: TextDecorationColorProperty;
  "text-decoration-line"?: TextDecorationLineProperty;
  "text-decoration-skip"?: TextDecorationSkipProperty;
  "text-decoration-skip-ink"?: TextDecorationSkipInkProperty;
  "text-decoration-style"?: TextDecorationStyleProperty;
  "text-emphasis"?: AllString;
  "text-emphasis-color"?: TextEmphasisColorProperty;
  "text-emphasis-position"?: AllString;
  "text-emphasis-style"?: TextEmphasisStyleProperty;
  "text-indent"?: AllString;
  "text-justify"?: TextJustifyProperty;
  "text-orientation"?: TextOrientationProperty;
  "text-overflow"?: TextOverflowProperty;
  "text-rendering"?: TextRenderingProperty;
  "text-shadow"?: TextShadowProperty;
  "text-size-adjust"?: TextSizeAdjustProperty;
  "text-transform"?: TextTransformProperty;
  "text-underline-position"?: TextUnderlinePositionProperty;
  top?: TopProperty<TLength>;
  "touch-action"?: TouchActionProperty;
  transform?: TransformProperty;
  "transform-box"?: TransformBoxProperty;
  "transform-origin"?: AllString;
  "transform-style"?: TransformStyleProperty;
  transition?: TransitionProperty;
  "transition-delay"?: AllString;
  "transition-duration"?: AllString;
  "transition-property"?: TransitionPropertyProperty;
  "transition-timing-function"?: TransitionTimingFunctionProperty;
  "unicode-bidi"?: UnicodeBidiProperty;
  "user-select"?: UserSelectProperty;
  "vertical-align"?: VerticalAlignProperty<TLength>;
  visibility?: VisibilityProperty;
  "white-space"?: WhiteSpaceProperty;
  widows?: AllNumber;
  width?: AllString;
  "will-change"?: WillChangeProperty;
  "word-break"?: WordBreakProperty;
  "word-spacing"?: WordSpacingProperty<TLength>;
  "word-wrap"?: WordWrapProperty;
  "writing-mode"?: WritingModeProperty;
  "z-index"?: ZIndexProperty;
}

export interface StandardPropertiesFallback<TLength = string | number> {
  alignContent?: AlignContentProperty | AlignContentProperty[];
  alignItems?: AlignItemsProperty | AlignItemsProperty[];
  alignSelf?: AlignSelfProperty | AlignSelfProperty[];
  animation?: AnimationProperty | AnimationProperty[];
  animationDelay?: AllString | AllString[];
  animationDirection?: AnimationDirectionProperty | AnimationDirectionProperty[];
  animationDuration?: AllString | AllString[];
  animationFillMode?: AnimationFillModeProperty | AnimationFillModeProperty[];
  animationIterationCount?: AnimationIterationCountProperty | AnimationIterationCountProperty[];
  animationName?: AnimationNameProperty | AnimationNameProperty[];
  animationPlayState?: AnimationPlayStateProperty | AnimationPlayStateProperty[];
  animationTimingFunction?: AnimationTimingFunctionProperty | AnimationTimingFunctionProperty[];
  appearance?: AppearanceProperty | AppearanceProperty[];
  azimuth?: AzimuthProperty | AzimuthProperty[];
  backdropFilter?: BackdropFilterProperty | BackdropFilterProperty[];
  backfaceVisibility?: BackfaceVisibilityProperty | BackfaceVisibilityProperty[];
  background?: AllString | AllString[];
  backgroundAttachment?: BackgroundAttachmentProperty | BackgroundAttachmentProperty[];
  backgroundBlendMode?: BackgroundBlendModeProperty | BackgroundBlendModeProperty[];
  backgroundClip?: BackgroundClipProperty | BackgroundClipProperty[];
  backgroundColor?: BackgroundColorProperty | BackgroundColorProperty[];
  backgroundImage?: BackgroundImageProperty | BackgroundImageProperty[];
  backgroundOrigin?: BackgroundOriginProperty | BackgroundOriginProperty[];
  backgroundPosition?: AllString | AllString[];
  backgroundPositionX?: AllString | AllString[];
  backgroundPositionY?: AllString | AllString[];
  backgroundRepeat?: BackgroundRepeatProperty | BackgroundRepeatProperty[];
  backgroundSize?: BackgroundSizeProperty<TLength> | BackgroundSizeProperty<TLength>[];
  blockSize?: AllString | AllString[];
  border?: BorderProperty<TLength> | BorderProperty<TLength>[];
  borderBlockEnd?: AllString | AllString[];
  borderBlockEndColor?: AllString | AllString[];
  borderBlockEndStyle?: AllString | AllString[];
  borderBlockEndWidth?: AllString | AllString[];
  borderBlockStart?: AllString | AllString[];
  borderBlockStartColor?: AllString | AllString[];
  borderBlockStartStyle?: AllString | AllString[];
  borderBlockStartWidth?: AllString | AllString[];
  borderBottom?: BorderBottomProperty<TLength> | BorderBottomProperty<TLength>[];
  borderBottomColor?: BorderBottomColorProperty | BorderBottomColorProperty[];
  borderBottomLeftRadius?: BorderBottomLeftRadiusProperty<TLength> | BorderBottomLeftRadiusProperty<TLength>[];
  borderBottomRightRadius?: BorderBottomRightRadiusProperty<TLength> | BorderBottomRightRadiusProperty<TLength>[];
  borderBottomStyle?: BorderBottomStyleProperty | BorderBottomStyleProperty[];
  borderBottomWidth?: BorderBottomWidthProperty<TLength> | BorderBottomWidthProperty<TLength>[];
  borderCollapse?: BorderCollapseProperty | BorderCollapseProperty[];
  borderColor?: BorderColorProperty | BorderColorProperty[];
  borderImage?: AllString | AllString[];
  borderImageOutset?: BorderImageOutsetProperty<TLength> | BorderImageOutsetProperty<TLength>[];
  borderImageRepeat?: BorderImageRepeatProperty | BorderImageRepeatProperty[];
  borderImageSlice?: AllString | AllString[];
  borderImageSource?: BorderImageSourceProperty | BorderImageSourceProperty[];
  borderImageWidth?: BorderImageWidthProperty<TLength> | BorderImageWidthProperty<TLength>[];
  borderInlineEnd?: AllString | AllString[];
  borderInlineEndColor?: AllString | AllString[];
  borderInlineEndStyle?: AllString | AllString[];
  borderInlineEndWidth?: AllString | AllString[];
  borderInlineStart?: AllString | AllString[];
  borderInlineStartColor?: AllString | AllString[];
  borderInlineStartStyle?: AllString | AllString[];
  borderInlineStartWidth?: AllString | AllString[];
  borderLeft?: BorderLeftProperty<TLength> | BorderLeftProperty<TLength>[];
  borderLeftColor?: BorderLeftColorProperty | BorderLeftColorProperty[];
  borderLeftStyle?: BorderLeftStyleProperty | BorderLeftStyleProperty[];
  borderLeftWidth?: BorderLeftWidthProperty<TLength> | BorderLeftWidthProperty<TLength>[];
  borderRadius?: BorderRadiusProperty<TLength> | BorderRadiusProperty<TLength>[];
  borderRight?: BorderRightProperty<TLength> | BorderRightProperty<TLength>[];
  borderRightColor?: BorderRightColorProperty | BorderRightColorProperty[];
  borderRightStyle?: BorderRightStyleProperty | BorderRightStyleProperty[];
  borderRightWidth?: BorderRightWidthProperty<TLength> | BorderRightWidthProperty<TLength>[];
  borderSpacing?: AllString | AllString[];
  borderStyle?: BorderStyleProperty | BorderStyleProperty[];
  borderTop?: BorderTopProperty<TLength> | BorderTopProperty<TLength>[];
  borderTopColor?: BorderTopColorProperty | BorderTopColorProperty[];
  borderTopLeftRadius?: BorderTopLeftRadiusProperty<TLength> | BorderTopLeftRadiusProperty<TLength>[];
  borderTopRightRadius?: BorderTopRightRadiusProperty<TLength> | BorderTopRightRadiusProperty<TLength>[];
  borderTopStyle?: BorderTopStyleProperty | BorderTopStyleProperty[];
  borderTopWidth?: BorderTopWidthProperty<TLength> | BorderTopWidthProperty<TLength>[];
  borderWidth?: BorderWidthProperty<TLength> | BorderWidthProperty<TLength>[];
  bottom?: BottomProperty<TLength> | BottomProperty<TLength>[];
  boxAlign?: BoxAlignProperty | BoxAlignProperty[];
  boxDecorationBreak?: BoxDecorationBreakProperty | BoxDecorationBreakProperty[];
  boxDirection?: BoxDirectionProperty | BoxDirectionProperty[];
  boxFlex?: AllNumber | AllNumber[];
  boxFlexGroup?: AllNumber | AllNumber[];
  boxLines?: BoxLinesProperty | BoxLinesProperty[];
  boxOrdinalGroup?: AllNumber | AllNumber[];
  boxOrient?: BoxOrientProperty | BoxOrientProperty[];
  boxPack?: BoxPackProperty | BoxPackProperty[];
  boxShadow?: BoxShadowProperty | BoxShadowProperty[];
  boxSizing?: BoxSizingProperty | BoxSizingProperty[];
  breakAfter?: BreakAfterProperty | BreakAfterProperty[];
  breakBefore?: BreakBeforeProperty | BreakBeforeProperty[];
  breakInside?: BreakInsideProperty | BreakInsideProperty[];
  captionSide?: CaptionSideProperty | CaptionSideProperty[];
  caretColor?: CaretColorProperty | CaretColorProperty[];
  clear?: ClearProperty | ClearProperty[];
  clip?: ClipProperty | ClipProperty[];
  clipPath?: ClipPathProperty | ClipPathProperty[];
  color?: ColorProperty | ColorProperty[];
  columnCount?: ColumnCountProperty | ColumnCountProperty[];
  columnFill?: ColumnFillProperty | ColumnFillProperty[];
  columnGap?: ColumnGapProperty<TLength> | ColumnGapProperty<TLength>[];
  columnRule?: AllString | AllString[];
  columnRuleColor?: ColumnRuleColorProperty | ColumnRuleColorProperty[];
  columnRuleStyle?: AllString | AllString[];
  columnRuleWidth?: AllString | AllString[];
  columnSpan?: ColumnSpanProperty | ColumnSpanProperty[];
  columnWidth?: ColumnWidthProperty<TLength> | ColumnWidthProperty<TLength>[];
  columns?: AllString | AllString[];
  contain?: ContainProperty | ContainProperty[];
  content?: ContentProperty | ContentProperty[];
  counterIncrement?: CounterIncrementProperty | CounterIncrementProperty[];
  counterReset?: CounterResetProperty | CounterResetProperty[];
  cursor?: CursorProperty | CursorProperty[];
  direction?: DirectionProperty | DirectionProperty[];
  display?: DisplayProperty | DisplayProperty[];
  displayInside?: DisplayInsideProperty | DisplayInsideProperty[];
  displayList?: DisplayListProperty | DisplayListProperty[];
  displayOutside?: DisplayOutsideProperty | DisplayOutsideProperty[];
  emptyCells?: EmptyCellsProperty | EmptyCellsProperty[];
  filter?: FilterProperty | FilterProperty[];
  flex?: FlexProperty | FlexProperty[];
  flexBasis?: FlexBasisProperty | FlexBasisProperty[];
  flexDirection?: FlexDirectionProperty | FlexDirectionProperty[];
  flexFlow?: AllString | AllString[];
  flexGrow?: AllNumber | AllNumber[];
  flexShrink?: AllNumber | AllNumber[];
  flexWrap?: FlexWrapProperty | FlexWrapProperty[];
  float?: FloatProperty | FloatProperty[];
  font?: FontProperty | FontProperty[];
  fontFamily?: FontFamilyProperty | FontFamilyProperty[];
  fontFeatureSettings?: FontFeatureSettingsProperty | FontFeatureSettingsProperty[];
  fontKerning?: FontKerningProperty | FontKerningProperty[];
  fontLanguageOverride?: FontLanguageOverrideProperty | FontLanguageOverrideProperty[];
  fontVariationSettings?: FontVariationSettingsProperty | FontVariationSettingsProperty[];
  fontSize?: FontSizeProperty<TLength> | FontSizeProperty<TLength>[];
  fontSizeAdjust?: FontSizeAdjustProperty | FontSizeAdjustProperty[];
  fontStretch?: FontStretchProperty | FontStretchProperty[];
  fontStyle?: FontStyleProperty | FontStyleProperty[];
  fontSynthesis?: FontSynthesisProperty | FontSynthesisProperty[];
  fontVariant?: FontVariantProperty | FontVariantProperty[];
  fontVariantAlternates?: FontVariantAlternatesProperty | FontVariantAlternatesProperty[];
  fontVariantCaps?: FontVariantCapsProperty | FontVariantCapsProperty[];
  fontVariantEastAsian?: FontVariantEastAsianProperty | FontVariantEastAsianProperty[];
  fontVariantLigatures?: FontVariantLigaturesProperty | FontVariantLigaturesProperty[];
  fontVariantNumeric?: FontVariantNumericProperty | FontVariantNumericProperty[];
  fontVariantPosition?: FontVariantPositionProperty | FontVariantPositionProperty[];
  fontWeight?: FontWeightProperty | FontWeightProperty[];
  grid?: AllString | AllString[];
  gridArea?: GridAreaProperty | GridAreaProperty[];
  gridAutoColumns?: AllString | AllString[];
  gridAutoFlow?: GridAutoFlowProperty | GridAutoFlowProperty[];
  gridAutoRows?: AllString | AllString[];
  gridColumn?: GridColumnProperty | GridColumnProperty[];
  gridColumnEnd?: GridColumnEndProperty | GridColumnEndProperty[];
  gridColumnGap?: GridColumnGapProperty<TLength> | GridColumnGapProperty<TLength>[];
  gridColumnStart?: GridColumnStartProperty | GridColumnStartProperty[];
  gridGap?: AllString | AllString[];
  gridRow?: GridRowProperty | GridRowProperty[];
  gridRowEnd?: GridRowEndProperty | GridRowEndProperty[];
  gridRowGap?: GridRowGapProperty<TLength> | GridRowGapProperty<TLength>[];
  gridRowStart?: GridRowStartProperty | GridRowStartProperty[];
  gridTemplate?: GridTemplateProperty | GridTemplateProperty[];
  gridTemplateAreas?: GridTemplateAreasProperty | GridTemplateAreasProperty[];
  gridTemplateColumns?: GridTemplateColumnsProperty | GridTemplateColumnsProperty[];
  gridTemplateRows?: GridTemplateRowsProperty | GridTemplateRowsProperty[];
  hangingPunctuation?: HangingPunctuationProperty | HangingPunctuationProperty[];
  height?: AllString | AllString[];
  hyphens?: HyphensProperty | HyphensProperty[];
  imageOrientation?: ImageOrientationProperty | ImageOrientationProperty[];
  imageRendering?: ImageRenderingProperty | ImageRenderingProperty[];
  imageResolution?: AllString | AllString[];
  imeMode?: ImeModeProperty | ImeModeProperty[];
  initialLetter?: InitialLetterProperty | InitialLetterProperty[];
  initialLetterAlign?: InitialLetterAlignProperty | InitialLetterAlignProperty[];
  inlineSize?: AllString | AllString[];
  isolation?: IsolationProperty | IsolationProperty[];
  justifyContent?: JustifyContentProperty | JustifyContentProperty[];
  left?: LeftProperty<TLength> | LeftProperty<TLength>[];
  letterSpacing?: LetterSpacingProperty<TLength> | LetterSpacingProperty<TLength>[];
  lineBreak?: LineBreakProperty | LineBreakProperty[];
  lineHeight?: LineHeightProperty<TLength> | LineHeightProperty<TLength>[];
  lineHeightStep?: LineHeightStepProperty<TLength> | LineHeightStepProperty<TLength>[];
  listStyle?: AllString | AllString[];
  listStyleImage?: ListStyleImageProperty | ListStyleImageProperty[];
  listStylePosition?: ListStylePositionProperty | ListStylePositionProperty[];
  listStyleType?: ListStyleTypeProperty | ListStyleTypeProperty[];
  margin?: MarginProperty<TLength> | MarginProperty<TLength>[];
  marginBlockEnd?: AllString | AllString[];
  marginBlockStart?: AllString | AllString[];
  marginBottom?: MarginBottomProperty<TLength> | MarginBottomProperty<TLength>[];
  marginInlineEnd?: AllString | AllString[];
  marginInlineStart?: AllString | AllString[];
  marginLeft?: MarginLeftProperty<TLength> | MarginLeftProperty<TLength>[];
  marginRight?: MarginRightProperty<TLength> | MarginRightProperty<TLength>[];
  marginTop?: MarginTopProperty<TLength> | MarginTopProperty<TLength>[];
  mask?: MaskProperty<TLength> | MaskProperty<TLength>[];
  maskBorder?: AllString | AllString[];
  maskBorderMode?: MaskBorderModeProperty | MaskBorderModeProperty[];
  maskBorderOutset?: MaskBorderOutsetProperty<TLength> | MaskBorderOutsetProperty<TLength>[];
  maskBorderRepeat?: MaskBorderRepeatProperty | MaskBorderRepeatProperty[];
  maskBorderSlice?: AllString | AllString[];
  maskBorderSource?: MaskBorderSourceProperty | MaskBorderSourceProperty[];
  maskBorderWidth?: MaskBorderWidthProperty<TLength> | MaskBorderWidthProperty<TLength>[];
  maskClip?: MaskClipProperty | MaskClipProperty[];
  maskComposite?: MaskCompositeProperty | MaskCompositeProperty[];
  maskImage?: MaskImageProperty | MaskImageProperty[];
  maskMode?: MaskModeProperty | MaskModeProperty[];
  maskOrigin?: MaskOriginProperty | MaskOriginProperty[];
  maskPosition?: AllString | AllString[];
  maskRepeat?: MaskRepeatProperty | MaskRepeatProperty[];
  maskSize?: MaskSizeProperty<TLength> | MaskSizeProperty<TLength>[];
  maskType?: MaskTypeProperty | MaskTypeProperty[];
  maxBlockSize?: AllString | AllString[];
  maxHeight?: MaxHeightProperty<TLength> | MaxHeightProperty<TLength>[];
  maxInlineSize?: AllString | AllString[];
  maxWidth?: MaxWidthProperty<TLength> | MaxWidthProperty<TLength>[];
  minBlockSize?: AllString | AllString[];
  minHeight?: MinHeightProperty<TLength> | MinHeightProperty<TLength>[];
  minInlineSize?: AllString | AllString[];
  minWidth?: MinWidthProperty<TLength> | MinWidthProperty<TLength>[];
  mixBlendMode?: MixBlendModeProperty | MixBlendModeProperty[];
  objectFit?: ObjectFitProperty | ObjectFitProperty[];
  objectPosition?: AllString | AllString[];
  offset?: AllString | AllString[];
  offsetAnchor?: OffsetAnchorProperty | OffsetAnchorProperty[];
  offsetBlockEnd?: AllString | AllString[];
  offsetBlockStart?: AllString | AllString[];
  offsetInlineEnd?: AllString | AllString[];
  offsetInlineStart?: AllString | AllString[];
  offsetDistance?: OffsetDistanceProperty<TLength> | OffsetDistanceProperty<TLength>[];
  offsetPath?: OffsetPathProperty | OffsetPathProperty[];
  offsetPosition?: OffsetPositionProperty | OffsetPositionProperty[];
  offsetRotate?: OffsetRotateProperty | OffsetRotateProperty[];
  opacity?: AllNumber | AllNumber[];
  order?: AllNumber | AllNumber[];
  orphans?: AllNumber | AllNumber[];
  outline?: AllString | AllString[];
  outlineColor?: OutlineColorProperty | OutlineColorProperty[];
  outlineOffset?: OutlineOffsetProperty<TLength> | OutlineOffsetProperty<TLength>[];
  outlineStyle?: OutlineStyleProperty | OutlineStyleProperty[];
  outlineWidth?: OutlineWidthProperty<TLength> | OutlineWidthProperty<TLength>[];
  overflow?: OverflowProperty | OverflowProperty[];
  overflowClipBox?: OverflowClipBoxProperty | OverflowClipBoxProperty[];
  overflowWrap?: OverflowWrapProperty | OverflowWrapProperty[];
  overflowX?: OverflowXProperty | OverflowXProperty[];
  overflowY?: OverflowYProperty | OverflowYProperty[];
  padding?: PaddingProperty<TLength> | PaddingProperty<TLength>[];
  paddingBlockEnd?: AllString | AllString[];
  paddingBlockStart?: AllString | AllString[];
  paddingBottom?: PaddingBottomProperty<TLength> | PaddingBottomProperty<TLength>[];
  paddingInlineEnd?: AllString | AllString[];
  paddingInlineStart?: AllString | AllString[];
  paddingLeft?: PaddingLeftProperty<TLength> | PaddingLeftProperty<TLength>[];
  paddingRight?: PaddingRightProperty<TLength> | PaddingRightProperty<TLength>[];
  paddingTop?: PaddingTopProperty<TLength> | PaddingTopProperty<TLength>[];
  pageBreakAfter?: PageBreakAfterProperty | PageBreakAfterProperty[];
  pageBreakBefore?: PageBreakBeforeProperty | PageBreakBeforeProperty[];
  pageBreakInside?: PageBreakInsideProperty | PageBreakInsideProperty[];
  perspective?: PerspectiveProperty<TLength> | PerspectiveProperty<TLength>[];
  perspectiveOrigin?: AllString | AllString[];
  pointerEvents?: PointerEventsProperty | PointerEventsProperty[];
  position?: PositionProperty | PositionProperty[];
  quotes?: QuotesProperty | QuotesProperty[];
  resize?: ResizeProperty | ResizeProperty[];
  right?: RightProperty<TLength> | RightProperty<TLength>[];
  rubyAlign?: RubyAlignProperty | RubyAlignProperty[];
  rubyMerge?: RubyMergeProperty | RubyMergeProperty[];
  rubyPosition?: RubyPositionProperty | RubyPositionProperty[];
  scrollBehavior?: ScrollBehaviorProperty | ScrollBehaviorProperty[];
  scrollSnapCoordinate?: ScrollSnapCoordinateProperty | ScrollSnapCoordinateProperty[];
  scrollSnapDestination?: AllString | AllString[];
  scrollSnapPointsX?: ScrollSnapPointsXProperty | ScrollSnapPointsXProperty[];
  scrollSnapPointsY?: ScrollSnapPointsYProperty | ScrollSnapPointsYProperty[];
  scrollSnapType?: ScrollSnapTypeProperty | ScrollSnapTypeProperty[];
  scrollSnapTypeX?: ScrollSnapTypeXProperty | ScrollSnapTypeXProperty[];
  scrollSnapTypeY?: ScrollSnapTypeYProperty | ScrollSnapTypeYProperty[];
  shapeImageThreshold?: AllNumber | AllNumber[];
  shapeMargin?: ShapeMarginProperty<TLength> | ShapeMarginProperty<TLength>[];
  shapeOutside?: ShapeOutsideProperty | ShapeOutsideProperty[];
  tabSize?: TabSizeProperty<TLength> | TabSizeProperty<TLength>[];
  tableLayout?: TableLayoutProperty | TableLayoutProperty[];
  textAlign?: TextAlignProperty | TextAlignProperty[];
  textAlignLast?: TextAlignLastProperty | TextAlignLastProperty[];
  textCombineUpright?: TextCombineUprightProperty | TextCombineUprightProperty[];
  textDecoration?: AllString | AllString[];
  textDecorationColor?: TextDecorationColorProperty | TextDecorationColorProperty[];
  textDecorationLine?: TextDecorationLineProperty | TextDecorationLineProperty[];
  textDecorationSkip?: TextDecorationSkipProperty | TextDecorationSkipProperty[];
  textDecorationSkipInk?: TextDecorationSkipInkProperty | TextDecorationSkipInkProperty[];
  textDecorationStyle?: TextDecorationStyleProperty | TextDecorationStyleProperty[];
  textEmphasis?: AllString | AllString[];
  textEmphasisColor?: TextEmphasisColorProperty | TextEmphasisColorProperty[];
  textEmphasisPosition?: AllString | AllString[];
  textEmphasisStyle?: TextEmphasisStyleProperty | TextEmphasisStyleProperty[];
  textIndent?: AllString | AllString[];
  textJustify?: TextJustifyProperty | TextJustifyProperty[];
  textOrientation?: TextOrientationProperty | TextOrientationProperty[];
  textOverflow?: TextOverflowProperty | TextOverflowProperty[];
  textRendering?: TextRenderingProperty | TextRenderingProperty[];
  textShadow?: TextShadowProperty | TextShadowProperty[];
  textSizeAdjust?: TextSizeAdjustProperty | TextSizeAdjustProperty[];
  textTransform?: TextTransformProperty | TextTransformProperty[];
  textUnderlinePosition?: TextUnderlinePositionProperty | TextUnderlinePositionProperty[];
  top?: TopProperty<TLength> | TopProperty<TLength>[];
  touchAction?: TouchActionProperty | TouchActionProperty[];
  transform?: TransformProperty | TransformProperty[];
  transformBox?: TransformBoxProperty | TransformBoxProperty[];
  transformOrigin?: AllString | AllString[];
  transformStyle?: TransformStyleProperty | TransformStyleProperty[];
  transition?: TransitionProperty | TransitionProperty[];
  transitionDelay?: AllString | AllString[];
  transitionDuration?: AllString | AllString[];
  transitionProperty?: TransitionPropertyProperty | TransitionPropertyProperty[];
  transitionTimingFunction?: TransitionTimingFunctionProperty | TransitionTimingFunctionProperty[];
  unicodeBidi?: UnicodeBidiProperty | UnicodeBidiProperty[];
  userSelect?: UserSelectProperty | UserSelectProperty[];
  verticalAlign?: VerticalAlignProperty<TLength> | VerticalAlignProperty<TLength>[];
  visibility?: VisibilityProperty | VisibilityProperty[];
  whiteSpace?: WhiteSpaceProperty | WhiteSpaceProperty[];
  widows?: AllNumber | AllNumber[];
  width?: AllString | AllString[];
  willChange?: WillChangeProperty | WillChangeProperty[];
  wordBreak?: WordBreakProperty | WordBreakProperty[];
  wordSpacing?: WordSpacingProperty<TLength> | WordSpacingProperty<TLength>[];
  wordWrap?: WordWrapProperty | WordWrapProperty[];
  writingMode?: WritingModeProperty | WritingModeProperty[];
  zIndex?: ZIndexProperty | ZIndexProperty[];
}

export interface StandardPropertiesHyphenFallback<TLength = string | number> {
  "align-content"?: AlignContentProperty | AlignContentProperty[];
  "align-items"?: AlignItemsProperty | AlignItemsProperty[];
  "align-self"?: AlignSelfProperty | AlignSelfProperty[];
  animation?: AnimationProperty | AnimationProperty[];
  "animation-delay"?: AllString | AllString[];
  "animation-direction"?: AnimationDirectionProperty | AnimationDirectionProperty[];
  "animation-duration"?: AllString | AllString[];
  "animation-fill-mode"?: AnimationFillModeProperty | AnimationFillModeProperty[];
  "animation-iteration-count"?: AnimationIterationCountProperty | AnimationIterationCountProperty[];
  "animation-name"?: AnimationNameProperty | AnimationNameProperty[];
  "animation-play-state"?: AnimationPlayStateProperty | AnimationPlayStateProperty[];
  "animation-timing-function"?: AnimationTimingFunctionProperty | AnimationTimingFunctionProperty[];
  appearance?: AppearanceProperty | AppearanceProperty[];
  azimuth?: AzimuthProperty | AzimuthProperty[];
  "backdrop-filter"?: BackdropFilterProperty | BackdropFilterProperty[];
  "backface-visibility"?: BackfaceVisibilityProperty | BackfaceVisibilityProperty[];
  background?: AllString | AllString[];
  "background-attachment"?: BackgroundAttachmentProperty | BackgroundAttachmentProperty[];
  "background-blend-mode"?: BackgroundBlendModeProperty | BackgroundBlendModeProperty[];
  "background-clip"?: BackgroundClipProperty | BackgroundClipProperty[];
  "background-color"?: BackgroundColorProperty | BackgroundColorProperty[];
  "background-image"?: BackgroundImageProperty | BackgroundImageProperty[];
  "background-origin"?: BackgroundOriginProperty | BackgroundOriginProperty[];
  "background-position"?: AllString | AllString[];
  "background-position-x"?: AllString | AllString[];
  "background-position-y"?: AllString | AllString[];
  "background-repeat"?: BackgroundRepeatProperty | BackgroundRepeatProperty[];
  "background-size"?: BackgroundSizeProperty<TLength> | BackgroundSizeProperty<TLength>[];
  "block-size"?: AllString | AllString[];
  border?: BorderProperty<TLength> | BorderProperty<TLength>[];
  "border-block-end"?: AllString | AllString[];
  "border-block-end-color"?: AllString | AllString[];
  "border-block-end-style"?: AllString | AllString[];
  "border-block-end-width"?: AllString | AllString[];
  "border-block-start"?: AllString | AllString[];
  "border-block-start-color"?: AllString | AllString[];
  "border-block-start-style"?: AllString | AllString[];
  "border-block-start-width"?: AllString | AllString[];
  "border-bottom"?: BorderBottomProperty<TLength> | BorderBottomProperty<TLength>[];
  "border-bottom-color"?: BorderBottomColorProperty | BorderBottomColorProperty[];
  "border-bottom-left-radius"?: BorderBottomLeftRadiusProperty<TLength> | BorderBottomLeftRadiusProperty<TLength>[];
  "border-bottom-right-radius"?: BorderBottomRightRadiusProperty<TLength> | BorderBottomRightRadiusProperty<TLength>[];
  "border-bottom-style"?: BorderBottomStyleProperty | BorderBottomStyleProperty[];
  "border-bottom-width"?: BorderBottomWidthProperty<TLength> | BorderBottomWidthProperty<TLength>[];
  "border-collapse"?: BorderCollapseProperty | BorderCollapseProperty[];
  "border-color"?: BorderColorProperty | BorderColorProperty[];
  "border-image"?: AllString | AllString[];
  "border-image-outset"?: BorderImageOutsetProperty<TLength> | BorderImageOutsetProperty<TLength>[];
  "border-image-repeat"?: BorderImageRepeatProperty | BorderImageRepeatProperty[];
  "border-image-slice"?: AllString | AllString[];
  "border-image-source"?: BorderImageSourceProperty | BorderImageSourceProperty[];
  "border-image-width"?: BorderImageWidthProperty<TLength> | BorderImageWidthProperty<TLength>[];
  "border-inline-end"?: AllString | AllString[];
  "border-inline-end-color"?: AllString | AllString[];
  "border-inline-end-style"?: AllString | AllString[];
  "border-inline-end-width"?: AllString | AllString[];
  "border-inline-start"?: AllString | AllString[];
  "border-inline-start-color"?: AllString | AllString[];
  "border-inline-start-style"?: AllString | AllString[];
  "border-inline-start-width"?: AllString | AllString[];
  "border-left"?: BorderLeftProperty<TLength> | BorderLeftProperty<TLength>[];
  "border-left-color"?: BorderLeftColorProperty | BorderLeftColorProperty[];
  "border-left-style"?: BorderLeftStyleProperty | BorderLeftStyleProperty[];
  "border-left-width"?: BorderLeftWidthProperty<TLength> | BorderLeftWidthProperty<TLength>[];
  "border-radius"?: BorderRadiusProperty<TLength> | BorderRadiusProperty<TLength>[];
  "border-right"?: BorderRightProperty<TLength> | BorderRightProperty<TLength>[];
  "border-right-color"?: BorderRightColorProperty | BorderRightColorProperty[];
  "border-right-style"?: BorderRightStyleProperty | BorderRightStyleProperty[];
  "border-right-width"?: BorderRightWidthProperty<TLength> | BorderRightWidthProperty<TLength>[];
  "border-spacing"?: AllString | AllString[];
  "border-style"?: BorderStyleProperty | BorderStyleProperty[];
  "border-top"?: BorderTopProperty<TLength> | BorderTopProperty<TLength>[];
  "border-top-color"?: BorderTopColorProperty | BorderTopColorProperty[];
  "border-top-left-radius"?: BorderTopLeftRadiusProperty<TLength> | BorderTopLeftRadiusProperty<TLength>[];
  "border-top-right-radius"?: BorderTopRightRadiusProperty<TLength> | BorderTopRightRadiusProperty<TLength>[];
  "border-top-style"?: BorderTopStyleProperty | BorderTopStyleProperty[];
  "border-top-width"?: BorderTopWidthProperty<TLength> | BorderTopWidthProperty<TLength>[];
  "border-width"?: BorderWidthProperty<TLength> | BorderWidthProperty<TLength>[];
  bottom?: BottomProperty<TLength> | BottomProperty<TLength>[];
  "box-align"?: BoxAlignProperty | BoxAlignProperty[];
  "box-decoration-break"?: BoxDecorationBreakProperty | BoxDecorationBreakProperty[];
  "box-direction"?: BoxDirectionProperty | BoxDirectionProperty[];
  "box-flex"?: AllNumber | AllNumber[];
  "box-flex-group"?: AllNumber | AllNumber[];
  "box-lines"?: BoxLinesProperty | BoxLinesProperty[];
  "box-ordinal-group"?: AllNumber | AllNumber[];
  "box-orient"?: BoxOrientProperty | BoxOrientProperty[];
  "box-pack"?: BoxPackProperty | BoxPackProperty[];
  "box-shadow"?: BoxShadowProperty | BoxShadowProperty[];
  "box-sizing"?: BoxSizingProperty | BoxSizingProperty[];
  "break-after"?: BreakAfterProperty | BreakAfterProperty[];
  "break-before"?: BreakBeforeProperty | BreakBeforeProperty[];
  "break-inside"?: BreakInsideProperty | BreakInsideProperty[];
  "caption-side"?: CaptionSideProperty | CaptionSideProperty[];
  "caret-color"?: CaretColorProperty | CaretColorProperty[];
  clear?: ClearProperty | ClearProperty[];
  clip?: ClipProperty | ClipProperty[];
  "clip-path"?: ClipPathProperty | ClipPathProperty[];
  color?: ColorProperty | ColorProperty[];
  "column-count"?: ColumnCountProperty | ColumnCountProperty[];
  "column-fill"?: ColumnFillProperty | ColumnFillProperty[];
  "column-gap"?: ColumnGapProperty<TLength> | ColumnGapProperty<TLength>[];
  "column-rule"?: AllString | AllString[];
  "column-rule-color"?: ColumnRuleColorProperty | ColumnRuleColorProperty[];
  "column-rule-style"?: AllString | AllString[];
  "column-rule-width"?: AllString | AllString[];
  "column-span"?: ColumnSpanProperty | ColumnSpanProperty[];
  "column-width"?: ColumnWidthProperty<TLength> | ColumnWidthProperty<TLength>[];
  columns?: AllString | AllString[];
  contain?: ContainProperty | ContainProperty[];
  content?: ContentProperty | ContentProperty[];
  "counter-increment"?: CounterIncrementProperty | CounterIncrementProperty[];
  "counter-reset"?: CounterResetProperty | CounterResetProperty[];
  cursor?: CursorProperty | CursorProperty[];
  direction?: DirectionProperty | DirectionProperty[];
  display?: DisplayProperty | DisplayProperty[];
  "display-inside"?: DisplayInsideProperty | DisplayInsideProperty[];
  "display-list"?: DisplayListProperty | DisplayListProperty[];
  "display-outside"?: DisplayOutsideProperty | DisplayOutsideProperty[];
  "empty-cells"?: EmptyCellsProperty | EmptyCellsProperty[];
  filter?: FilterProperty | FilterProperty[];
  flex?: FlexProperty | FlexProperty[];
  "flex-basis"?: FlexBasisProperty | FlexBasisProperty[];
  "flex-direction"?: FlexDirectionProperty | FlexDirectionProperty[];
  "flex-flow"?: AllString | AllString[];
  "flex-grow"?: AllNumber | AllNumber[];
  "flex-shrink"?: AllNumber | AllNumber[];
  "flex-wrap"?: FlexWrapProperty | FlexWrapProperty[];
  float?: FloatProperty | FloatProperty[];
  font?: FontProperty | FontProperty[];
  "font-family"?: FontFamilyProperty | FontFamilyProperty[];
  "font-feature-settings"?: FontFeatureSettingsProperty | FontFeatureSettingsProperty[];
  "font-kerning"?: FontKerningProperty | FontKerningProperty[];
  "font-language-override"?: FontLanguageOverrideProperty | FontLanguageOverrideProperty[];
  "font-variation-settings"?: FontVariationSettingsProperty | FontVariationSettingsProperty[];
  "font-size"?: FontSizeProperty<TLength> | FontSizeProperty<TLength>[];
  "font-size-adjust"?: FontSizeAdjustProperty | FontSizeAdjustProperty[];
  "font-stretch"?: FontStretchProperty | FontStretchProperty[];
  "font-style"?: FontStyleProperty | FontStyleProperty[];
  "font-synthesis"?: FontSynthesisProperty | FontSynthesisProperty[];
  "font-variant"?: FontVariantProperty | FontVariantProperty[];
  "font-variant-alternates"?: FontVariantAlternatesProperty | FontVariantAlternatesProperty[];
  "font-variant-caps"?: FontVariantCapsProperty | FontVariantCapsProperty[];
  "font-variant-east-asian"?: FontVariantEastAsianProperty | FontVariantEastAsianProperty[];
  "font-variant-ligatures"?: FontVariantLigaturesProperty | FontVariantLigaturesProperty[];
  "font-variant-numeric"?: FontVariantNumericProperty | FontVariantNumericProperty[];
  "font-variant-position"?: FontVariantPositionProperty | FontVariantPositionProperty[];
  "font-weight"?: FontWeightProperty | FontWeightProperty[];
  grid?: AllString | AllString[];
  "grid-area"?: GridAreaProperty | GridAreaProperty[];
  "grid-auto-columns"?: AllString | AllString[];
  "grid-auto-flow"?: GridAutoFlowProperty | GridAutoFlowProperty[];
  "grid-auto-rows"?: AllString | AllString[];
  "grid-column"?: GridColumnProperty | GridColumnProperty[];
  "grid-column-end"?: GridColumnEndProperty | GridColumnEndProperty[];
  "grid-column-gap"?: GridColumnGapProperty<TLength> | GridColumnGapProperty<TLength>[];
  "grid-column-start"?: GridColumnStartProperty | GridColumnStartProperty[];
  "grid-gap"?: AllString | AllString[];
  "grid-row"?: GridRowProperty | GridRowProperty[];
  "grid-row-end"?: GridRowEndProperty | GridRowEndProperty[];
  "grid-row-gap"?: GridRowGapProperty<TLength> | GridRowGapProperty<TLength>[];
  "grid-row-start"?: GridRowStartProperty | GridRowStartProperty[];
  "grid-template"?: GridTemplateProperty | GridTemplateProperty[];
  "grid-template-areas"?: GridTemplateAreasProperty | GridTemplateAreasProperty[];
  "grid-template-columns"?: GridTemplateColumnsProperty | GridTemplateColumnsProperty[];
  "grid-template-rows"?: GridTemplateRowsProperty | GridTemplateRowsProperty[];
  "hanging-punctuation"?: HangingPunctuationProperty | HangingPunctuationProperty[];
  height?: AllString | AllString[];
  hyphens?: HyphensProperty | HyphensProperty[];
  "image-orientation"?: ImageOrientationProperty | ImageOrientationProperty[];
  "image-rendering"?: ImageRenderingProperty | ImageRenderingProperty[];
  "image-resolution"?: AllString | AllString[];
  "ime-mode"?: ImeModeProperty | ImeModeProperty[];
  "initial-letter"?: InitialLetterProperty | InitialLetterProperty[];
  "initial-letter-align"?: InitialLetterAlignProperty | InitialLetterAlignProperty[];
  "inline-size"?: AllString | AllString[];
  isolation?: IsolationProperty | IsolationProperty[];
  "justify-content"?: JustifyContentProperty | JustifyContentProperty[];
  left?: LeftProperty<TLength> | LeftProperty<TLength>[];
  "letter-spacing"?: LetterSpacingProperty<TLength> | LetterSpacingProperty<TLength>[];
  "line-break"?: LineBreakProperty | LineBreakProperty[];
  "line-height"?: LineHeightProperty<TLength> | LineHeightProperty<TLength>[];
  "line-height-step"?: LineHeightStepProperty<TLength> | LineHeightStepProperty<TLength>[];
  "list-style"?: AllString | AllString[];
  "list-style-image"?: ListStyleImageProperty | ListStyleImageProperty[];
  "list-style-position"?: ListStylePositionProperty | ListStylePositionProperty[];
  "list-style-type"?: ListStyleTypeProperty | ListStyleTypeProperty[];
  margin?: MarginProperty<TLength> | MarginProperty<TLength>[];
  "margin-block-end"?: AllString | AllString[];
  "margin-block-start"?: AllString | AllString[];
  "margin-bottom"?: MarginBottomProperty<TLength> | MarginBottomProperty<TLength>[];
  "margin-inline-end"?: AllString | AllString[];
  "margin-inline-start"?: AllString | AllString[];
  "margin-left"?: MarginLeftProperty<TLength> | MarginLeftProperty<TLength>[];
  "margin-right"?: MarginRightProperty<TLength> | MarginRightProperty<TLength>[];
  "margin-top"?: MarginTopProperty<TLength> | MarginTopProperty<TLength>[];
  mask?: MaskProperty<TLength> | MaskProperty<TLength>[];
  "mask-border"?: AllString | AllString[];
  "mask-border-mode"?: MaskBorderModeProperty | MaskBorderModeProperty[];
  "mask-border-outset"?: MaskBorderOutsetProperty<TLength> | MaskBorderOutsetProperty<TLength>[];
  "mask-border-repeat"?: MaskBorderRepeatProperty | MaskBorderRepeatProperty[];
  "mask-border-slice"?: AllString | AllString[];
  "mask-border-source"?: MaskBorderSourceProperty | MaskBorderSourceProperty[];
  "mask-border-width"?: MaskBorderWidthProperty<TLength> | MaskBorderWidthProperty<TLength>[];
  "mask-clip"?: MaskClipProperty | MaskClipProperty[];
  "mask-composite"?: MaskCompositeProperty | MaskCompositeProperty[];
  "mask-image"?: MaskImageProperty | MaskImageProperty[];
  "mask-mode"?: MaskModeProperty | MaskModeProperty[];
  "mask-origin"?: MaskOriginProperty | MaskOriginProperty[];
  "mask-position"?: AllString | AllString[];
  "mask-repeat"?: MaskRepeatProperty | MaskRepeatProperty[];
  "mask-size"?: MaskSizeProperty<TLength> | MaskSizeProperty<TLength>[];
  "mask-type"?: MaskTypeProperty | MaskTypeProperty[];
  "max-block-size"?: AllString | AllString[];
  "max-height"?: MaxHeightProperty<TLength> | MaxHeightProperty<TLength>[];
  "max-inline-size"?: AllString | AllString[];
  "max-width"?: MaxWidthProperty<TLength> | MaxWidthProperty<TLength>[];
  "min-block-size"?: AllString | AllString[];
  "min-height"?: MinHeightProperty<TLength> | MinHeightProperty<TLength>[];
  "min-inline-size"?: AllString | AllString[];
  "min-width"?: MinWidthProperty<TLength> | MinWidthProperty<TLength>[];
  "mix-blend-mode"?: MixBlendModeProperty | MixBlendModeProperty[];
  "object-fit"?: ObjectFitProperty | ObjectFitProperty[];
  "object-position"?: AllString | AllString[];
  offset?: AllString | AllString[];
  "offset-anchor"?: OffsetAnchorProperty | OffsetAnchorProperty[];
  "offset-block-end"?: AllString | AllString[];
  "offset-block-start"?: AllString | AllString[];
  "offset-inline-end"?: AllString | AllString[];
  "offset-inline-start"?: AllString | AllString[];
  "offset-distance"?: OffsetDistanceProperty<TLength> | OffsetDistanceProperty<TLength>[];
  "offset-path"?: OffsetPathProperty | OffsetPathProperty[];
  "offset-position"?: OffsetPositionProperty | OffsetPositionProperty[];
  "offset-rotate"?: OffsetRotateProperty | OffsetRotateProperty[];
  opacity?: AllNumber | AllNumber[];
  order?: AllNumber | AllNumber[];
  orphans?: AllNumber | AllNumber[];
  outline?: AllString | AllString[];
  "outline-color"?: OutlineColorProperty | OutlineColorProperty[];
  "outline-offset"?: OutlineOffsetProperty<TLength> | OutlineOffsetProperty<TLength>[];
  "outline-style"?: OutlineStyleProperty | OutlineStyleProperty[];
  "outline-width"?: OutlineWidthProperty<TLength> | OutlineWidthProperty<TLength>[];
  overflow?: OverflowProperty | OverflowProperty[];
  "overflow-clip-box"?: OverflowClipBoxProperty | OverflowClipBoxProperty[];
  "overflow-wrap"?: OverflowWrapProperty | OverflowWrapProperty[];
  "overflow-x"?: OverflowXProperty | OverflowXProperty[];
  "overflow-y"?: OverflowYProperty | OverflowYProperty[];
  padding?: PaddingProperty<TLength> | PaddingProperty<TLength>[];
  "padding-block-end"?: AllString | AllString[];
  "padding-block-start"?: AllString | AllString[];
  "padding-bottom"?: PaddingBottomProperty<TLength> | PaddingBottomProperty<TLength>[];
  "padding-inline-end"?: AllString | AllString[];
  "padding-inline-start"?: AllString | AllString[];
  "padding-left"?: PaddingLeftProperty<TLength> | PaddingLeftProperty<TLength>[];
  "padding-right"?: PaddingRightProperty<TLength> | PaddingRightProperty<TLength>[];
  "padding-top"?: PaddingTopProperty<TLength> | PaddingTopProperty<TLength>[];
  "page-break-after"?: PageBreakAfterProperty | PageBreakAfterProperty[];
  "page-break-before"?: PageBreakBeforeProperty | PageBreakBeforeProperty[];
  "page-break-inside"?: PageBreakInsideProperty | PageBreakInsideProperty[];
  perspective?: PerspectiveProperty<TLength> | PerspectiveProperty<TLength>[];
  "perspective-origin"?: AllString | AllString[];
  "pointer-events"?: PointerEventsProperty | PointerEventsProperty[];
  position?: PositionProperty | PositionProperty[];
  quotes?: QuotesProperty | QuotesProperty[];
  resize?: ResizeProperty | ResizeProperty[];
  right?: RightProperty<TLength> | RightProperty<TLength>[];
  "ruby-align"?: RubyAlignProperty | RubyAlignProperty[];
  "ruby-merge"?: RubyMergeProperty | RubyMergeProperty[];
  "ruby-position"?: RubyPositionProperty | RubyPositionProperty[];
  "scroll-behavior"?: ScrollBehaviorProperty | ScrollBehaviorProperty[];
  "scroll-snap-coordinate"?: ScrollSnapCoordinateProperty | ScrollSnapCoordinateProperty[];
  "scroll-snap-destination"?: AllString | AllString[];
  "scroll-snap-points-x"?: ScrollSnapPointsXProperty | ScrollSnapPointsXProperty[];
  "scroll-snap-points-y"?: ScrollSnapPointsYProperty | ScrollSnapPointsYProperty[];
  "scroll-snap-type"?: ScrollSnapTypeProperty | ScrollSnapTypeProperty[];
  "scroll-snap-type-x"?: ScrollSnapTypeXProperty | ScrollSnapTypeXProperty[];
  "scroll-snap-type-y"?: ScrollSnapTypeYProperty | ScrollSnapTypeYProperty[];
  "shape-image-threshold"?: AllNumber | AllNumber[];
  "shape-margin"?: ShapeMarginProperty<TLength> | ShapeMarginProperty<TLength>[];
  "shape-outside"?: ShapeOutsideProperty | ShapeOutsideProperty[];
  "tab-size"?: TabSizeProperty<TLength> | TabSizeProperty<TLength>[];
  "table-layout"?: TableLayoutProperty | TableLayoutProperty[];
  "text-align"?: TextAlignProperty | TextAlignProperty[];
  "text-align-last"?: TextAlignLastProperty | TextAlignLastProperty[];
  "text-combine-upright"?: TextCombineUprightProperty | TextCombineUprightProperty[];
  "text-decoration"?: AllString | AllString[];
  "text-decoration-color"?: TextDecorationColorProperty | TextDecorationColorProperty[];
  "text-decoration-line"?: TextDecorationLineProperty | TextDecorationLineProperty[];
  "text-decoration-skip"?: TextDecorationSkipProperty | TextDecorationSkipProperty[];
  "text-decoration-skip-ink"?: TextDecorationSkipInkProperty | TextDecorationSkipInkProperty[];
  "text-decoration-style"?: TextDecorationStyleProperty | TextDecorationStyleProperty[];
  "text-emphasis"?: AllString | AllString[];
  "text-emphasis-color"?: TextEmphasisColorProperty | TextEmphasisColorProperty[];
  "text-emphasis-position"?: AllString | AllString[];
  "text-emphasis-style"?: TextEmphasisStyleProperty | TextEmphasisStyleProperty[];
  "text-indent"?: AllString | AllString[];
  "text-justify"?: TextJustifyProperty | TextJustifyProperty[];
  "text-orientation"?: TextOrientationProperty | TextOrientationProperty[];
  "text-overflow"?: TextOverflowProperty | TextOverflowProperty[];
  "text-rendering"?: TextRenderingProperty | TextRenderingProperty[];
  "text-shadow"?: TextShadowProperty | TextShadowProperty[];
  "text-size-adjust"?: TextSizeAdjustProperty | TextSizeAdjustProperty[];
  "text-transform"?: TextTransformProperty | TextTransformProperty[];
  "text-underline-position"?: TextUnderlinePositionProperty | TextUnderlinePositionProperty[];
  top?: TopProperty<TLength> | TopProperty<TLength>[];
  "touch-action"?: TouchActionProperty | TouchActionProperty[];
  transform?: TransformProperty | TransformProperty[];
  "transform-box"?: TransformBoxProperty | TransformBoxProperty[];
  "transform-origin"?: AllString | AllString[];
  "transform-style"?: TransformStyleProperty | TransformStyleProperty[];
  transition?: TransitionProperty | TransitionProperty[];
  "transition-delay"?: AllString | AllString[];
  "transition-duration"?: AllString | AllString[];
  "transition-property"?: TransitionPropertyProperty | TransitionPropertyProperty[];
  "transition-timing-function"?: TransitionTimingFunctionProperty | TransitionTimingFunctionProperty[];
  "unicode-bidi"?: UnicodeBidiProperty | UnicodeBidiProperty[];
  "user-select"?: UserSelectProperty | UserSelectProperty[];
  "vertical-align"?: VerticalAlignProperty<TLength> | VerticalAlignProperty<TLength>[];
  visibility?: VisibilityProperty | VisibilityProperty[];
  "white-space"?: WhiteSpaceProperty | WhiteSpaceProperty[];
  widows?: AllNumber | AllNumber[];
  width?: AllString | AllString[];
  "will-change"?: WillChangeProperty | WillChangeProperty[];
  "word-break"?: WordBreakProperty | WordBreakProperty[];
  "word-spacing"?: WordSpacingProperty<TLength> | WordSpacingProperty<TLength>[];
  "word-wrap"?: WordWrapProperty | WordWrapProperty[];
  "writing-mode"?: WritingModeProperty | WritingModeProperty[];
  "z-index"?: ZIndexProperty | ZIndexProperty[];
}

export interface VendorProperties<TLength = string | number> {
  msOverflowStyle?: MsOverflowStyleProperty;
  mozAppearance?: MozAppearanceProperty;
  mozBinding?: MozBindingProperty;
  mozBorderBottomColors?: AllString;
  mozBorderLeftColors?: AllString;
  mozBorderRightColors?: AllString;
  mozBorderTopColors?: AllString;
  mozContextProperties?: MozContextPropertiesProperty;
  mozFloatEdge?: MozFloatEdgeProperty;
  mozForceBrokenImageIcon?: AllNumber;
  mozImageRegion?: MozImageRegionProperty;
  mozOrient?: MozOrientProperty;
  mozOutlineRadius?: AllString;
  mozOutlineRadiusBottomleft?: AllString;
  mozOutlineRadiusBottomright?: AllString;
  mozOutlineRadiusTopleft?: AllString;
  mozOutlineRadiusTopright?: AllString;
  mozStackSizing?: MozStackSizingProperty;
  mozTextBlink?: MozTextBlinkProperty;
  mozUserFocus?: MozUserFocusProperty;
  mozUserInput?: MozUserInputProperty;
  mozUserModify?: MozUserModifyProperty;
  mozWindowDragging?: MozWindowDraggingProperty;
  mozWindowShadow?: MozWindowShadowProperty;
  webkitBorderBefore?: AllString;
  webkitBorderBeforeColor?: AllString;
  webkitBorderBeforeStyle?: AllString;
  webkitBorderBeforeWidth?: AllString;
  webkitBoxReflect?: AllString;
  webkitMask?: AllString;
  webkitMaskAttachment?: WebkitMaskAttachmentProperty;
  webkitMaskClip?: WebkitMaskClipProperty;
  webkitMaskComposite?: WebkitMaskCompositeProperty;
  webkitMaskImage?: AllString;
  webkitMaskOrigin?: WebkitMaskOriginProperty;
  webkitMaskPosition?: WebkitMaskPositionProperty<TLength>;
  webkitMaskPositionX?: WebkitMaskPositionXProperty<TLength>;
  webkitMaskPositionY?: WebkitMaskPositionYProperty<TLength>;
  webkitMaskRepeat?: WebkitMaskRepeatProperty;
  webkitMaskRepeatX?: WebkitMaskRepeatXProperty;
  webkitMaskRepeatY?: WebkitMaskRepeatYProperty;
  webkitOverflowScrolling?: WebkitOverflowScrollingProperty;
  webkitTapHighlightColor?: WebkitTapHighlightColorProperty;
  webkitTextFillColor?: WebkitTextFillColorProperty;
  webkitTextStroke?: WebkitTextStrokeProperty<TLength>;
  webkitTextStrokeColor?: WebkitTextStrokeColorProperty;
  webkitTextStrokeWidth?: WebkitTextStrokeWidthProperty<TLength>;
  webkitTouchCallout?: WebkitTouchCalloutProperty;
}

export interface VendorPropertiesHyphen<TLength = string | number> {
  "-ms-overflow-style"?: MsOverflowStyleProperty;
  "-moz-appearance"?: MozAppearanceProperty;
  "-moz-binding"?: MozBindingProperty;
  "-moz-border-bottom-colors"?: AllString;
  "-moz-border-left-colors"?: AllString;
  "-moz-border-right-colors"?: AllString;
  "-moz-border-top-colors"?: AllString;
  "-moz-context-properties"?: MozContextPropertiesProperty;
  "-moz-float-edge"?: MozFloatEdgeProperty;
  "-moz-force-broken-image-icon"?: AllNumber;
  "-moz-image-region"?: MozImageRegionProperty;
  "-moz-orient"?: MozOrientProperty;
  "-moz-outline-radius"?: AllString;
  "-moz-outline-radius-bottomleft"?: AllString;
  "-moz-outline-radius-bottomright"?: AllString;
  "-moz-outline-radius-topleft"?: AllString;
  "-moz-outline-radius-topright"?: AllString;
  "-moz-stack-sizing"?: MozStackSizingProperty;
  "-moz-text-blink"?: MozTextBlinkProperty;
  "-moz-user-focus"?: MozUserFocusProperty;
  "-moz-user-input"?: MozUserInputProperty;
  "-moz-user-modify"?: MozUserModifyProperty;
  "-moz-window-dragging"?: MozWindowDraggingProperty;
  "-moz-window-shadow"?: MozWindowShadowProperty;
  "-webkit-border-before"?: AllString;
  "-webkit-border-before-color"?: AllString;
  "-webkit-border-before-style"?: AllString;
  "-webkit-border-before-width"?: AllString;
  "-webkit-box-reflect"?: AllString;
  "-webkit-mask"?: AllString;
  "-webkit-mask-attachment"?: WebkitMaskAttachmentProperty;
  "-webkit-mask-clip"?: WebkitMaskClipProperty;
  "-webkit-mask-composite"?: WebkitMaskCompositeProperty;
  "-webkit-mask-image"?: AllString;
  "-webkit-mask-origin"?: WebkitMaskOriginProperty;
  "-webkit-mask-position"?: WebkitMaskPositionProperty<TLength>;
  "-webkit-mask-position-x"?: WebkitMaskPositionXProperty<TLength>;
  "-webkit-mask-position-y"?: WebkitMaskPositionYProperty<TLength>;
  "-webkit-mask-repeat"?: WebkitMaskRepeatProperty;
  "-webkit-mask-repeat-x"?: WebkitMaskRepeatXProperty;
  "-webkit-mask-repeat-y"?: WebkitMaskRepeatYProperty;
  "-webkit-overflow-scrolling"?: WebkitOverflowScrollingProperty;
  "-webkit-tap-highlight-color"?: WebkitTapHighlightColorProperty;
  "-webkit-text-fill-color"?: WebkitTextFillColorProperty;
  "-webkit-text-stroke"?: WebkitTextStrokeProperty<TLength>;
  "-webkit-text-stroke-color"?: WebkitTextStrokeColorProperty;
  "-webkit-text-stroke-width"?: WebkitTextStrokeWidthProperty<TLength>;
  "-webkit-touch-callout"?: WebkitTouchCalloutProperty;
}

export interface VendorPropertiesFallback<TLength = string | number> {
  msOverflowStyle?: MsOverflowStyleProperty | MsOverflowStyleProperty[];
  mozAppearance?: MozAppearanceProperty | MozAppearanceProperty[];
  mozBinding?: MozBindingProperty | MozBindingProperty[];
  mozBorderBottomColors?: AllString | AllString[];
  mozBorderLeftColors?: AllString | AllString[];
  mozBorderRightColors?: AllString | AllString[];
  mozBorderTopColors?: AllString | AllString[];
  mozContextProperties?: MozContextPropertiesProperty | MozContextPropertiesProperty[];
  mozFloatEdge?: MozFloatEdgeProperty | MozFloatEdgeProperty[];
  mozForceBrokenImageIcon?: AllNumber | AllNumber[];
  mozImageRegion?: MozImageRegionProperty | MozImageRegionProperty[];
  mozOrient?: MozOrientProperty | MozOrientProperty[];
  mozOutlineRadius?: AllString | AllString[];
  mozOutlineRadiusBottomleft?: AllString | AllString[];
  mozOutlineRadiusBottomright?: AllString | AllString[];
  mozOutlineRadiusTopleft?: AllString | AllString[];
  mozOutlineRadiusTopright?: AllString | AllString[];
  mozStackSizing?: MozStackSizingProperty | MozStackSizingProperty[];
  mozTextBlink?: MozTextBlinkProperty | MozTextBlinkProperty[];
  mozUserFocus?: MozUserFocusProperty | MozUserFocusProperty[];
  mozUserInput?: MozUserInputProperty | MozUserInputProperty[];
  mozUserModify?: MozUserModifyProperty | MozUserModifyProperty[];
  mozWindowDragging?: MozWindowDraggingProperty | MozWindowDraggingProperty[];
  mozWindowShadow?: MozWindowShadowProperty | MozWindowShadowProperty[];
  webkitBorderBefore?: AllString | AllString[];
  webkitBorderBeforeColor?: AllString | AllString[];
  webkitBorderBeforeStyle?: AllString | AllString[];
  webkitBorderBeforeWidth?: AllString | AllString[];
  webkitBoxReflect?: AllString | AllString[];
  webkitMask?: AllString | AllString[];
  webkitMaskAttachment?: WebkitMaskAttachmentProperty | WebkitMaskAttachmentProperty[];
  webkitMaskClip?: WebkitMaskClipProperty | WebkitMaskClipProperty[];
  webkitMaskComposite?: WebkitMaskCompositeProperty | WebkitMaskCompositeProperty[];
  webkitMaskImage?: AllString | AllString[];
  webkitMaskOrigin?: WebkitMaskOriginProperty | WebkitMaskOriginProperty[];
  webkitMaskPosition?: WebkitMaskPositionProperty<TLength> | WebkitMaskPositionProperty<TLength>[];
  webkitMaskPositionX?: WebkitMaskPositionXProperty<TLength> | WebkitMaskPositionXProperty<TLength>[];
  webkitMaskPositionY?: WebkitMaskPositionYProperty<TLength> | WebkitMaskPositionYProperty<TLength>[];
  webkitMaskRepeat?: WebkitMaskRepeatProperty | WebkitMaskRepeatProperty[];
  webkitMaskRepeatX?: WebkitMaskRepeatXProperty | WebkitMaskRepeatXProperty[];
  webkitMaskRepeatY?: WebkitMaskRepeatYProperty | WebkitMaskRepeatYProperty[];
  webkitOverflowScrolling?: WebkitOverflowScrollingProperty | WebkitOverflowScrollingProperty[];
  webkitTapHighlightColor?: WebkitTapHighlightColorProperty | WebkitTapHighlightColorProperty[];
  webkitTextFillColor?: WebkitTextFillColorProperty | WebkitTextFillColorProperty[];
  webkitTextStroke?: WebkitTextStrokeProperty<TLength> | WebkitTextStrokeProperty<TLength>[];
  webkitTextStrokeColor?: WebkitTextStrokeColorProperty | WebkitTextStrokeColorProperty[];
  webkitTextStrokeWidth?: WebkitTextStrokeWidthProperty<TLength> | WebkitTextStrokeWidthProperty<TLength>[];
  webkitTouchCallout?: WebkitTouchCalloutProperty | WebkitTouchCalloutProperty[];
}

export interface VendorPropertiesHyphenFallback<TLength = string | number> {
  "-ms-overflow-style"?: MsOverflowStyleProperty | MsOverflowStyleProperty[];
  "-moz-appearance"?: MozAppearanceProperty | MozAppearanceProperty[];
  "-moz-binding"?: MozBindingProperty | MozBindingProperty[];
  "-moz-border-bottom-colors"?: AllString | AllString[];
  "-moz-border-left-colors"?: AllString | AllString[];
  "-moz-border-right-colors"?: AllString | AllString[];
  "-moz-border-top-colors"?: AllString | AllString[];
  "-moz-context-properties"?: MozContextPropertiesProperty | MozContextPropertiesProperty[];
  "-moz-float-edge"?: MozFloatEdgeProperty | MozFloatEdgeProperty[];
  "-moz-force-broken-image-icon"?: AllNumber | AllNumber[];
  "-moz-image-region"?: MozImageRegionProperty | MozImageRegionProperty[];
  "-moz-orient"?: MozOrientProperty | MozOrientProperty[];
  "-moz-outline-radius"?: AllString | AllString[];
  "-moz-outline-radius-bottomleft"?: AllString | AllString[];
  "-moz-outline-radius-bottomright"?: AllString | AllString[];
  "-moz-outline-radius-topleft"?: AllString | AllString[];
  "-moz-outline-radius-topright"?: AllString | AllString[];
  "-moz-stack-sizing"?: MozStackSizingProperty | MozStackSizingProperty[];
  "-moz-text-blink"?: MozTextBlinkProperty | MozTextBlinkProperty[];
  "-moz-user-focus"?: MozUserFocusProperty | MozUserFocusProperty[];
  "-moz-user-input"?: MozUserInputProperty | MozUserInputProperty[];
  "-moz-user-modify"?: MozUserModifyProperty | MozUserModifyProperty[];
  "-moz-window-dragging"?: MozWindowDraggingProperty | MozWindowDraggingProperty[];
  "-moz-window-shadow"?: MozWindowShadowProperty | MozWindowShadowProperty[];
  "-webkit-border-before"?: AllString | AllString[];
  "-webkit-border-before-color"?: AllString | AllString[];
  "-webkit-border-before-style"?: AllString | AllString[];
  "-webkit-border-before-width"?: AllString | AllString[];
  "-webkit-box-reflect"?: AllString | AllString[];
  "-webkit-mask"?: AllString | AllString[];
  "-webkit-mask-attachment"?: WebkitMaskAttachmentProperty | WebkitMaskAttachmentProperty[];
  "-webkit-mask-clip"?: WebkitMaskClipProperty | WebkitMaskClipProperty[];
  "-webkit-mask-composite"?: WebkitMaskCompositeProperty | WebkitMaskCompositeProperty[];
  "-webkit-mask-image"?: AllString | AllString[];
  "-webkit-mask-origin"?: WebkitMaskOriginProperty | WebkitMaskOriginProperty[];
  "-webkit-mask-position"?: WebkitMaskPositionProperty<TLength> | WebkitMaskPositionProperty<TLength>[];
  "-webkit-mask-position-x"?: WebkitMaskPositionXProperty<TLength> | WebkitMaskPositionXProperty<TLength>[];
  "-webkit-mask-position-y"?: WebkitMaskPositionYProperty<TLength> | WebkitMaskPositionYProperty<TLength>[];
  "-webkit-mask-repeat"?: WebkitMaskRepeatProperty | WebkitMaskRepeatProperty[];
  "-webkit-mask-repeat-x"?: WebkitMaskRepeatXProperty | WebkitMaskRepeatXProperty[];
  "-webkit-mask-repeat-y"?: WebkitMaskRepeatYProperty | WebkitMaskRepeatYProperty[];
  "-webkit-overflow-scrolling"?: WebkitOverflowScrollingProperty | WebkitOverflowScrollingProperty[];
  "-webkit-tap-highlight-color"?: WebkitTapHighlightColorProperty | WebkitTapHighlightColorProperty[];
  "-webkit-text-fill-color"?: WebkitTextFillColorProperty | WebkitTextFillColorProperty[];
  "-webkit-text-stroke"?: WebkitTextStrokeProperty<TLength> | WebkitTextStrokeProperty<TLength>[];
  "-webkit-text-stroke-color"?: WebkitTextStrokeColorProperty | WebkitTextStrokeColorProperty[];
  "-webkit-text-stroke-width"?: WebkitTextStrokeWidthProperty<TLength> | WebkitTextStrokeWidthProperty<TLength>[];
  "-webkit-touch-callout"?: WebkitTouchCalloutProperty | WebkitTouchCalloutProperty[];
}

export interface Properties<TLength = string | number> extends StandardProperties<TLength>, VendorProperties<TLength> {}

export interface PropertiesHyphen<TLength = string | number> extends StandardPropertiesHyphen<TLength>, VendorPropertiesHyphen<TLength> {}

export interface PropertiesFallback<TLength = string | number> extends StandardPropertiesFallback<TLength>, VendorPropertiesFallback<TLength> {}

export interface PropertiesHyphenFallback<TLength = string | number> extends StandardPropertiesFallback<TLength>, VendorPropertiesFallback<TLength> {}

export type Pseudos =
  | "::-moz-progress-bar"
  | "::-moz-range-progress"
  | "::-moz-range-thumb"
  | "::-moz-range-track"
  | "::-ms-fill"
  | "::-ms-fill-lower"
  | "::-ms-fill-upper"
  | "::-ms-thumb"
  | "::-ms-track"
  | "::-webkit-progress-bar"
  | "::-webkit-progress-inner-value"
  | "::-webkit-progress-value"
  | "::-webkit-slider-runnable-track"
  | "::-webkit-slider-thumb"
  | "::after"
  | "::backdrop"
  | "::before"
  | "::cue"
  | "::first-letter"
  | "::first-line"
  | "::grammar-error"
  | "::placeholder"
  | "::selection"
  | "::spelling-error"
  | ":active"
  | ":any"
  | ":any-link"
  | ":checked"
  | ":default"
  | ":defined"
  | ":dir"
  | ":disabled"
  | ":empty"
  | ":enabled"
  | ":first"
  | ":first-child"
  | ":first-of-type"
  | ":focus"
  | ":focus-within"
  | ":fullscreen"
  | ":hover"
  | ":in-range"
  | ":indeterminate"
  | ":invalid"
  | ":lang"
  | ":last-child"
  | ":last-of-type"
  | ":left"
  | ":link"
  | ":not"
  | ":nth-child"
  | ":nth-last-child"
  | ":nth-last-of-type"
  | ":nth-of-type"
  | ":only-child"
  | ":only-of-type"
  | ":optional"
  | ":out-of-range"
  | ":placeholder-shown"
  | ":read-only"
  | ":read-write"
  | ":required"
  | ":right"
  | ":root"
  | ":scope"
  | ":target"
  | ":valid"
  | ":visited";

type All = "inherit" | "initial" | "revert" | "unset";

type AllString = All | string;

type AllNumber = All | number;

type AlignContentProperty = All | "center" | "flex-end" | "flex-start" | "space-around" | "space-between" | "space-evenly" | "stretch";

type AlignItemsProperty = All | "baseline" | "center" | "flex-end" | "flex-start" | "stretch";

type AlignSelfProperty = All | "auto" | "baseline" | "center" | "flex-end" | "flex-start" | "stretch";

type AnimationProperty = All | SingleAnimation;

type AnimationDirectionProperty = All | SingleAnimationDirection;

type AnimationFillModeProperty = All | SingleAnimationFillMode;

type AnimationIterationCountProperty = All | SingleAnimationIterationCount;

type AnimationNameProperty = All | "none" | string;

type AnimationPlayStateProperty = All | SingleAnimationPlayState;

type AnimationTimingFunctionProperty = All | SingleTimingFunction;

type AppearanceProperty = All | "auto" | "none";

type AzimuthProperty =
  | All
  | "behind"
  | "center"
  | "center-left"
  | "center-right"
  | "far-left"
  | "far-right"
  | "left"
  | "left-side"
  | "leftwards"
  | "right"
  | "right-side"
  | "rightwards"
  | string;

type BackdropFilterProperty = All | "none" | string;

type BackfaceVisibilityProperty = All | "hidden" | "visible";

type BackgroundAttachmentProperty = All | Attachment;

type BackgroundBlendModeProperty = All | BlendMode;

type BackgroundClipProperty = All | Box;

type BackgroundColorProperty = All | Color;

type BackgroundImageProperty = All | BgImage;

type BackgroundOriginProperty = All | Box;

type BackgroundRepeatProperty = All | RepeatStyle;

type BackgroundSizeProperty<TLength> = All | BgSize<TLength>;

type BorderProperty<TLength> = All | BrWidth<TLength> | BrStyle | Color | string;

type BorderBottomProperty<TLength> = All | BrWidth<TLength> | BrStyle | Color | string;

type BorderBottomColorProperty = All | Color;

type BorderBottomLeftRadiusProperty<TLength> = All | LengthPercentage<TLength>;

type BorderBottomRightRadiusProperty<TLength> = All | LengthPercentage<TLength>;

type BorderBottomStyleProperty = All | BrStyle;

type BorderBottomWidthProperty<TLength> = All | BrWidth<TLength>;

type BorderCollapseProperty = All | "collapse" | "separate";

type BorderColorProperty = All | Color;

type BorderImageOutsetProperty<TLength> = All | TLength | number;

type BorderImageRepeatProperty = All | "repeat" | "round" | "space" | "stretch";

type BorderImageSourceProperty = All | "none" | string;

type BorderImageWidthProperty<TLength> = All | LengthPercentage<TLength> | "auto" | number;

type BorderLeftProperty<TLength> = All | BrWidth<TLength> | BrStyle | Color | string;

type BorderLeftColorProperty = All | Color;

type BorderLeftStyleProperty = All | BrStyle;

type BorderLeftWidthProperty<TLength> = All | BrWidth<TLength>;

type BorderRadiusProperty<TLength> = All | LengthPercentage<TLength>;

type BorderRightProperty<TLength> = All | BrWidth<TLength> | BrStyle | Color | string;

type BorderRightColorProperty = All | Color;

type BorderRightStyleProperty = All | BrStyle;

type BorderRightWidthProperty<TLength> = All | BrWidth<TLength>;

type BorderStyleProperty = All | BrStyle;

type BorderTopProperty<TLength> = All | BrWidth<TLength> | BrStyle | Color | string;

type BorderTopColorProperty = All | Color;

type BorderTopLeftRadiusProperty<TLength> = All | LengthPercentage<TLength>;

type BorderTopRightRadiusProperty<TLength> = All | LengthPercentage<TLength>;

type BorderTopStyleProperty = All | BrStyle;

type BorderTopWidthProperty<TLength> = All | BrWidth<TLength>;

type BorderWidthProperty<TLength> = All | BrWidth<TLength>;

type BottomProperty<TLength> = All | TLength | "auto" | string;

type BoxAlignProperty = All | "baseline" | "center" | "end" | "start" | "stretch";

type BoxDecorationBreakProperty = All | "clone" | "slice";

type BoxDirectionProperty = All | "inherit" | "normal" | "reverse";

type BoxLinesProperty = All | "multiple" | "single";

type BoxOrientProperty = All | "block-axis" | "horizontal" | "inherit" | "inline-axis" | "vertical";

type BoxPackProperty = All | "center" | "end" | "justify" | "start";

type BoxShadowProperty = All | "none" | string;

type BoxSizingProperty = All | "border-box" | "content-box";

type BreakAfterProperty = All | "auto" | "avoid" | "avoid-column" | "avoid-page" | "avoid-region" | "column" | "left" | "page" | "recto" | "region" | "right" | "verso";

type BreakBeforeProperty = All | "auto" | "avoid" | "avoid-column" | "avoid-page" | "avoid-region" | "column" | "left" | "page" | "recto" | "region" | "right" | "verso";

type BreakInsideProperty = All | "auto" | "avoid" | "avoid-column" | "avoid-page" | "avoid-region";

type CaptionSideProperty = All | "block-end" | "block-start" | "bottom" | "inline-end" | "inline-start" | "top";

type CaretColorProperty = All | Color | "auto";

type ClearProperty = All | "both" | "inline-end" | "inline-start" | "left" | "none" | "right";

type ClipProperty = All | "auto" | string;

type ClipPathProperty = All | GeometryBox | "none" | string;

type ColorProperty = All | Color;

type ColumnCountProperty = All | "auto" | number;

type ColumnFillProperty = All | "auto" | "balance" | "balance-all";

type ColumnGapProperty<TLength> = All | LengthPercentage<TLength> | "normal";

type ColumnRuleColorProperty = All | Color;

type ColumnSpanProperty = All | "all" | "none";

type ColumnWidthProperty<TLength> = All | TLength | "auto";

type ContainProperty = All | "content" | "layout" | "none" | "paint" | "size" | "strict" | "style" | string;

type ContentProperty = All | ContentList | "none" | "normal" | string;

type CounterIncrementProperty = All | "none" | string;

type CounterResetProperty = All | "none" | string;

type CursorProperty =
  | All
  | "alias"
  | "all-scroll"
  | "auto"
  | "cell"
  | "col-resize"
  | "context-menu"
  | "copy"
  | "crosshair"
  | "default"
  | "e-resize"
  | "ew-resize"
  | "grab"
  | "grabbing"
  | "help"
  | "move"
  | "n-resize"
  | "ne-resize"
  | "nesw-resize"
  | "no-drop"
  | "none"
  | "not-allowed"
  | "ns-resize"
  | "nw-resize"
  | "nwse-resize"
  | "pointer"
  | "progress"
  | "row-resize"
  | "s-resize"
  | "se-resize"
  | "sw-resize"
  | "text"
  | "vertical-text"
  | "w-resize"
  | "wait"
  | "zoom-in"
  | "zoom-out"
  | string;

type DirectionProperty = All | "ltr" | "rtl";

type DisplayProperty = All | DisplayOutside | DisplayInside | DisplayInternal | DisplayBox | DisplayLegacy | string;

type DisplayInsideProperty = All | "auto" | "block" | "flex" | "grid" | "ruby" | "table";

type DisplayListProperty = All | "list-item" | "none";

type DisplayOutsideProperty =
  | All
  | "block-level"
  | "contents"
  | "inline-level"
  | "none"
  | "ruby-base"
  | "ruby-base-container"
  | "ruby-text"
  | "ruby-text-container"
  | "run-in"
  | "table-caption"
  | "table-cell"
  | "table-column"
  | "table-column-group"
  | "table-footer-group"
  | "table-header-group"
  | "table-row"
  | "table-row-group";

type EmptyCellsProperty = All | "hide" | "show";

type FilterProperty = All | "none" | string;

type FlexProperty = All | "none" | string;

type FlexBasisProperty = All | "content" | string;

type FlexDirectionProperty = All | "column" | "column-reverse" | "row" | "row-reverse";

type FlexWrapProperty = All | "nowrap" | "wrap" | "wrap-reverse";

type FloatProperty = All | "inline-end" | "inline-start" | "left" | "none" | "right";

type FontProperty = All | "caption" | "icon" | "menu" | "message-box" | "small-caption" | "status-bar" | string;

type FontFamilyProperty = All | GenericFamily | string;

type FontFeatureSettingsProperty = All | FeatureTagValue | "normal";

type FontKerningProperty = All | "auto" | "none" | "normal";

type FontLanguageOverrideProperty = All | "normal" | string;

type FontVariationSettingsProperty = All | "normal" | string;

type FontSizeProperty<TLength> = All | AbsoluteSize | RelativeSize | LengthPercentage<TLength>;

type FontSizeAdjustProperty = All | "none" | number;

type FontStretchProperty =
  | All
  | "condensed"
  | "expanded"
  | "extra-condensed"
  | "extra-expanded"
  | "normal"
  | "semi-condensed"
  | "semi-expanded"
  | "ultra-condensed"
  | "ultra-expanded";

type FontStyleProperty = All | "italic" | "normal" | "oblique";

type FontSynthesisProperty = All | "none" | "style" | "weight" | string;

type FontVariantProperty = All | "none" | "normal" | string;

type FontVariantAlternatesProperty = All | "normal" | string;

type FontVariantCapsProperty = All | "all-petite-caps" | "all-small-caps" | "normal" | "petite-caps" | "small-caps" | "titling-caps" | "unicase";

type FontVariantEastAsianProperty = All | EastAsianVariantValues | EastAsianWidthValues | "normal" | "ruby" | string;

type FontVariantLigaturesProperty = All | CommonLigValues | DiscretionaryLigValues | HistoricalLigValues | ContextualAltValues | "none" | "normal" | string;

type FontVariantNumericProperty = All | NumericFigureValues | NumericSpacingValues | NumericFractionValues | "normal" | "ordinal" | "slashed-zero" | string;

type FontVariantPositionProperty = All | "normal" | "sub" | "super";

type FontWeightProperty = All | "bold" | "bolder" | "lighter" | "normal" | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

type GridAreaProperty = All | GridLine;

type GridAutoFlowProperty = All | "column" | "dense" | "row" | string;

type GridColumnProperty = All | GridLine;

type GridColumnEndProperty = All | GridLine;

type GridColumnGapProperty<TLength> = All | LengthPercentage<TLength>;

type GridColumnStartProperty = All | GridLine;

type GridRowProperty = All | GridLine;

type GridRowEndProperty = All | GridLine;

type GridRowGapProperty<TLength> = All | LengthPercentage<TLength>;

type GridRowStartProperty = All | GridLine;

type GridTemplateProperty = All | "none" | string;

type GridTemplateAreasProperty = All | "none" | string;

type GridTemplateColumnsProperty = All | "none" | string;

type GridTemplateRowsProperty = All | "none" | string;

type HangingPunctuationProperty = All | "allow-end" | "first" | "force-end" | "last" | "none" | string;

type HyphensProperty = All | "auto" | "manual" | "none";

type ImageOrientationProperty = All | "from-image" | string;

type ImageRenderingProperty = All | "auto" | "crisp-edges" | "pixelated";

type ImeModeProperty = All | "active" | "auto" | "disabled" | "inactive" | "normal";

type InitialLetterProperty = All | "normal" | string;

type InitialLetterAlignProperty = All | "alphabetic" | "auto" | "hanging" | "ideographic";

type IsolationProperty = All | "auto" | "isolate";

type JustifyContentProperty = All | "center" | "flex-end" | "flex-start" | "space-around" | "space-between" | "space-evenly";

type LeftProperty<TLength> = All | TLength | "auto" | string;

type LetterSpacingProperty<TLength> = All | TLength | "normal";

type LineBreakProperty = All | "auto" | "loose" | "normal" | "strict";

type LineHeightProperty<TLength> = All | TLength | "normal" | string | number;

type LineHeightStepProperty<TLength> = All | TLength | "none";

type ListStyleImageProperty = All | "none" | string;

type ListStylePositionProperty = All | "inside" | "outside";

type ListStyleTypeProperty = All | "none" | string;

type MarginProperty<TLength> = All | TLength | "auto" | string;

type MarginBottomProperty<TLength> = All | TLength | "auto" | string;

type MarginLeftProperty<TLength> = All | TLength | "auto" | string;

type MarginRightProperty<TLength> = All | TLength | "auto" | string;

type MarginTopProperty<TLength> = All | TLength | "auto" | string;

type MaskProperty<TLength> = All | MaskLayer<TLength>;

type MaskBorderModeProperty = All | "alpha" | "luminance";

type MaskBorderOutsetProperty<TLength> = All | TLength | number;

type MaskBorderRepeatProperty = All | "repeat" | "round" | "space" | "stretch";

type MaskBorderSourceProperty = All | "none" | string;

type MaskBorderWidthProperty<TLength> = All | LengthPercentage<TLength> | "auto" | number;

type MaskClipProperty = All | GeometryBox | "no-clip" | string;

type MaskCompositeProperty = All | CompositingOperator;

type MaskImageProperty = All | MaskReference;

type MaskModeProperty = All | MaskingMode;

type MaskOriginProperty = All | GeometryBox;

type MaskRepeatProperty = All | RepeatStyle;

type MaskSizeProperty<TLength> = All | BgSize<TLength>;

type MaskTypeProperty = All | "alpha" | "luminance";

type MaxHeightProperty<TLength> = All | TLength | "fill-available" | "fit-content" | "max-content" | "min-content" | "none" | string;

type MaxWidthProperty<TLength> = All | TLength | "fill-available" | "fit-content" | "max-content" | "min-content" | "none" | string;

type MinHeightProperty<TLength> = All | TLength | "auto" | "fill-available" | "fit-content" | "max-content" | "min-content" | string;

type MinWidthProperty<TLength> = All | TLength | "auto" | "fill-available" | "fit-content" | "max-content" | "min-content" | string;

type MixBlendModeProperty = All | BlendMode;

type ObjectFitProperty = All | "contain" | "cover" | "fill" | "none" | "scale-down";

type OffsetAnchorProperty = All | "auto" | string;

type OffsetDistanceProperty<TLength> = All | LengthPercentage<TLength>;

type OffsetPathProperty = All | GeometryBox | "none" | string;

type OffsetPositionProperty = All | "auto" | string;

type OffsetRotateProperty = All | "auto" | "reverse" | string;

type OutlineColorProperty = All | Color | "invert";

type OutlineOffsetProperty<TLength> = All | TLength;

type OutlineStyleProperty = All | BrStyle | "auto";

type OutlineWidthProperty<TLength> = All | BrWidth<TLength>;

type OverflowProperty = All | "auto" | "hidden" | "scroll" | "visible";

type OverflowClipBoxProperty = All | "content-box" | "padding-box";

type OverflowWrapProperty = All | "break-word" | "normal";

type OverflowXProperty = All | "auto" | "hidden" | "scroll" | "visible";

type OverflowYProperty = All | "auto" | "hidden" | "scroll" | "visible";

type PaddingProperty<TLength> = All | TLength | string;

type PaddingBottomProperty<TLength> = All | TLength | string;

type PaddingLeftProperty<TLength> = All | TLength | string;

type PaddingRightProperty<TLength> = All | TLength | string;

type PaddingTopProperty<TLength> = All | TLength | string;

type PageBreakAfterProperty = All | "always" | "auto" | "avoid" | "left" | "right";

type PageBreakBeforeProperty = All | "always" | "auto" | "avoid" | "left" | "right";

type PageBreakInsideProperty = All | "auto" | "avoid";

type PerspectiveProperty<TLength> = All | TLength | "none";

type PointerEventsProperty = All | "all" | "auto" | "fill" | "inherit" | "none" | "painted" | "stroke" | "visible" | "visibleFill" | "visiblePainted" | "visibleStroke";

type PositionProperty = All | "absolute" | "fixed" | "relative" | "static" | "sticky";

type QuotesProperty = All | "none" | string;

type ResizeProperty = All | "both" | "horizontal" | "none" | "vertical";

type RightProperty<TLength> = All | TLength | "auto" | string;

type RubyAlignProperty = All | "center" | "space-around" | "space-between" | "start";

type RubyMergeProperty = All | "auto" | "collapse" | "separate";

type RubyPositionProperty = All | "inter-character" | "over" | "under";

type ScrollBehaviorProperty = All | "auto" | "smooth";

type ScrollSnapCoordinateProperty = All | "none" | string;

type ScrollSnapPointsXProperty = All | "none" | string;

type ScrollSnapPointsYProperty = All | "none" | string;

type ScrollSnapTypeProperty = All | "mandatory" | "none" | "proximity";

type ScrollSnapTypeXProperty = All | "mandatory" | "none" | "proximity";

type ScrollSnapTypeYProperty = All | "mandatory" | "none" | "proximity";

type ShapeMarginProperty<TLength> = All | LengthPercentage<TLength>;

type ShapeOutsideProperty = All | ShapeBox | "none" | string;

type TabSizeProperty<TLength> = All | TLength | number;

type TableLayoutProperty = All | "auto" | "fixed";

type TextAlignProperty = All | "center" | "end" | "justify" | "left" | "match-parent" | "right" | "start";

type TextAlignLastProperty = All | "auto" | "center" | "end" | "justify" | "left" | "right" | "start";

type TextCombineUprightProperty = All | "all" | "none" | string;

type TextDecorationColorProperty = All | Color;

type TextDecorationLineProperty = All | "blink" | "line-through" | "none" | "overline" | "underline" | string;

type TextDecorationSkipProperty = All | "box-decoration" | "edges" | "leading-spaces" | "none" | "objects" | "spaces" | "trailing-spaces" | string;

type TextDecorationSkipInkProperty = All | "auto" | "none";

type TextDecorationStyleProperty = All | "dashed" | "dotted" | "double" | "solid" | "wavy";

type TextEmphasisColorProperty = All | Color;

type TextEmphasisStyleProperty = All | "circle" | "dot" | "double-circle" | "filled" | "none" | "open" | "sesame" | "triangle" | string;

type TextJustifyProperty = All | "auto" | "inter-character" | "inter-word" | "none";

type TextOrientationProperty = All | "mixed" | "sideways" | "upright";

type TextOverflowProperty = All | "clip" | "ellipsis" | string;

type TextRenderingProperty = All | "auto" | "geometricPrecision" | "optimizeLegibility" | "optimizeSpeed";

type TextShadowProperty = All | "none" | string;

type TextSizeAdjustProperty = All | "auto" | "none" | string;

type TextTransformProperty = All | "capitalize" | "full-width" | "lowercase" | "none" | "uppercase";

type TextUnderlinePositionProperty = All | "auto" | "left" | "right" | "under" | string;

type TopProperty<TLength> = All | TLength | "auto" | string;

type TouchActionProperty = All | "auto" | "manipulation" | "none" | "pan-down" | "pan-left" | "pan-right" | "pan-up" | "pan-x" | "pan-y" | "pinch-zoom" | string;

type TransformProperty = All | "none" | string;

type TransformBoxProperty = All | "border-box" | "fill-box" | "view-box";

type TransformStyleProperty = All | "flat" | "preserve-3d";

type TransitionProperty = All | SingleTransition;

type TransitionPropertyProperty = All | SingleTransitionProperty | "none";

type TransitionTimingFunctionProperty = All | SingleTransitionTimingFunction;

type UnicodeBidiProperty = All | "bidi-override" | "embed" | "isolate" | "isolate-override" | "normal" | "plaintext";

type UserSelectProperty = All | "all" | "auto" | "contain" | "none" | "text";

type VerticalAlignProperty<TLength> = All | TLength | "baseline" | "bottom" | "middle" | "sub" | "super" | "text-bottom" | "text-top" | "top" | string;

type VisibilityProperty = All | "collapse" | "hidden" | "visible";

type WhiteSpaceProperty = All | "normal" | "nowrap" | "pre" | "pre-line" | "pre-wrap";

type WillChangeProperty = All | AnimateableFeature | "auto";

type WordBreakProperty = All | "break-all" | "keep-all" | "normal";

type WordSpacingProperty<TLength> = All | LengthPercentage<TLength> | "normal";

type WordWrapProperty = All | "break-word" | "normal";

type WritingModeProperty = All | "horizontal-tb" | "sideways-lr" | "sideways-rl" | "vertical-lr" | "vertical-rl";

type ZIndexProperty = All | "auto" | number;

type MsOverflowStyleProperty = All | "-ms-autohiding-scrollbar" | "auto" | "none" | "scrollbar";

type MozAppearanceProperty =
  | All
  | "-moz-mac-unified-toolbar"
  | "-moz-win-borderless-glass"
  | "-moz-win-browsertabbar-toolbox"
  | "-moz-win-communications-toolbox"
  | "-moz-win-communicationstext"
  | "-moz-win-exclude-glass"
  | "-moz-win-glass"
  | "-moz-win-media-toolbox"
  | "-moz-win-mediatext"
  | "-moz-window-button-box"
  | "-moz-window-button-box-maximized"
  | "-moz-window-button-close"
  | "-moz-window-button-maximize"
  | "-moz-window-button-minimize"
  | "-moz-window-button-restore"
  | "-moz-window-frame-bottom"
  | "-moz-window-frame-left"
  | "-moz-window-frame-right"
  | "-moz-window-titlebar"
  | "-moz-window-titlebar-maximized"
  | "button"
  | "button-arrow-down"
  | "button-arrow-next"
  | "button-arrow-previous"
  | "button-arrow-up"
  | "button-bevel"
  | "button-focus"
  | "caret"
  | "checkbox"
  | "checkbox-container"
  | "checkbox-label"
  | "checkmenuitem"
  | "dualbutton"
  | "groupbox"
  | "listbox"
  | "listitem"
  | "menuarrow"
  | "menubar"
  | "menucheckbox"
  | "menuimage"
  | "menuitem"
  | "menuitemtext"
  | "menulist"
  | "menulist-button"
  | "menulist-text"
  | "menulist-textfield"
  | "menupopup"
  | "menuradio"
  | "menuseparator"
  | "meterbar"
  | "meterchunk"
  | "none"
  | "progressbar"
  | "progressbar-vertical"
  | "progresschunk"
  | "progresschunk-vertical"
  | "radio"
  | "radio-container"
  | "radio-label"
  | "radiomenuitem"
  | "range"
  | "range-thumb"
  | "resizer"
  | "resizerpanel"
  | "scale-horizontal"
  | "scale-vertical"
  | "scalethumb-horizontal"
  | "scalethumb-vertical"
  | "scalethumbend"
  | "scalethumbstart"
  | "scalethumbtick"
  | "scrollbarbutton-down"
  | "scrollbarbutton-left"
  | "scrollbarbutton-right"
  | "scrollbarbutton-up"
  | "scrollbarthumb-horizontal"
  | "scrollbarthumb-vertical"
  | "scrollbartrack-horizontal"
  | "scrollbartrack-vertical"
  | "searchfield"
  | "separator"
  | "sheet"
  | "spinner"
  | "spinner-downbutton"
  | "spinner-textfield"
  | "spinner-upbutton"
  | "splitter"
  | "statusbar"
  | "statusbarpanel"
  | "tab"
  | "tab-scroll-arrow-back"
  | "tab-scroll-arrow-forward"
  | "tabpanel"
  | "tabpanels"
  | "textfield"
  | "textfield-multiline"
  | "toolbar"
  | "toolbarbutton"
  | "toolbarbutton-dropdown"
  | "toolbargripper"
  | "toolbox"
  | "tooltip"
  | "treeheader"
  | "treeheadercell"
  | "treeheadersortarrow"
  | "treeitem"
  | "treeline"
  | "treetwisty"
  | "treetwistyopen"
  | "treeview";

type MozBindingProperty = All | "none" | string;

type MozContextPropertiesProperty = All | "fill" | "fill-opacity" | "none" | "stroke" | "stroke-opacity" | string;

type MozFloatEdgeProperty = All | "border-box" | "content-box" | "margin-box" | "padding-box";

type MozImageRegionProperty = All | "auto" | string;

type MozOrientProperty = All | "block" | "horizontal" | "inline" | "vertical";

type MozStackSizingProperty = All | "ignore" | "stretch-to-fit";

type MozTextBlinkProperty = All | "blink" | "none";

type MozUserFocusProperty = All | "ignore" | "none" | "normal" | "select-after" | "select-all" | "select-before" | "select-menu" | "select-same";

type MozUserInputProperty = All | "auto" | "disabled" | "enabled" | "none";

type MozUserModifyProperty = All | "read-only" | "read-write" | "write-only";

type MozWindowDraggingProperty = All | "drag" | "no-drag";

type MozWindowShadowProperty = All | "default" | "menu" | "none" | "sheet" | "tooltip";

type WebkitMaskAttachmentProperty = All | Attachment | string;

type WebkitMaskClipProperty = All | "border" | "border-box" | "content" | "content-box" | "padding" | "padding-box" | "text" | string;

type WebkitMaskCompositeProperty = All | CompositeStyle | string;

type WebkitMaskOriginProperty = All | "border" | "content" | "padding" | string;

type WebkitMaskPositionProperty<TLength> = All | MaskPosition<TLength>;

type WebkitMaskPositionXProperty<TLength> = All | LengthPercentage<TLength> | "center" | "left" | "right" | string;

type WebkitMaskPositionYProperty<TLength> = All | LengthPercentage<TLength> | "bottom" | "center" | "top" | string;

type WebkitMaskRepeatProperty = All | RepeatStyle | string;

type WebkitMaskRepeatXProperty = All | "no-repeat" | "repeat" | "round" | "space";

type WebkitMaskRepeatYProperty = All | "no-repeat" | "repeat" | "round" | "space";

type WebkitOverflowScrollingProperty = All | "auto" | "touch";

type WebkitTapHighlightColorProperty = All | Color;

type WebkitTextFillColorProperty = All | Color;

type WebkitTextStrokeProperty<TLength> = All | Color | TLength | string;

type WebkitTextStrokeColorProperty = All | Color;

type WebkitTextStrokeWidthProperty<TLength> = All | TLength;

type WebkitTouchCalloutProperty = All | "default" | "none";

type SingleAnimation = SingleTimingFunction | SingleAnimationIterationCount | SingleAnimationDirection | SingleAnimationFillMode | SingleAnimationPlayState | "none" | string;

type SingleTimingFunction = StepTimingFunction | "linear" | string;

type StepTimingFunction = "step-end" | "step-start" | string;

type SingleAnimationIterationCount = "infinite" | number;

type SingleAnimationDirection = "alternate" | "alternate-reverse" | "normal" | "reverse";

type SingleAnimationFillMode = "backwards" | "both" | "forwards" | "none";

type SingleAnimationPlayState = "paused" | "running";

type Attachment = "fixed" | "local" | "scroll";

type BlendMode =
  | "color"
  | "color-burn"
  | "color-dodge"
  | "darken"
  | "difference"
  | "exclusion"
  | "hard-light"
  | "hue"
  | "lighten"
  | "luminosity"
  | "multiply"
  | "normal"
  | "overlay"
  | "saturation"
  | "screen"
  | "soft-light";

type Box = "border-box" | "content-box" | "padding-box";

type Color = NamedColor | DeprecatedSystemColor | "currentcolor" | string;

type NamedColor =
  | "aliceblue"
  | "antiquewhite"
  | "aqua"
  | "aquamarine"
  | "azure"
  | "beige"
  | "bisque"
  | "black"
  | "blanchedalmond"
  | "blue"
  | "blueviolet"
  | "brown"
  | "burlywood"
  | "cadetblue"
  | "chartreuse"
  | "chocolate"
  | "coral"
  | "cornflowerblue"
  | "cornsilk"
  | "crimson"
  | "cyan"
  | "darkblue"
  | "darkcyan"
  | "darkgoldenrod"
  | "darkgray"
  | "darkgreen"
  | "darkgrey"
  | "darkkhaki"
  | "darkmagenta"
  | "darkolivegreen"
  | "darkorange"
  | "darkorchid"
  | "darkred"
  | "darksalmon"
  | "darkseagreen"
  | "darkslateblue"
  | "darkslategray"
  | "darkslategrey"
  | "darkturquoise"
  | "darkviolet"
  | "deeppink"
  | "deepskyblue"
  | "dimgray"
  | "dimgrey"
  | "dodgerblue"
  | "firebrick"
  | "floralwhite"
  | "forestgreen"
  | "fuchsia"
  | "gainsboro"
  | "ghostwhite"
  | "gold"
  | "goldenrod"
  | "gray"
  | "green"
  | "greenyellow"
  | "grey"
  | "honeydew"
  | "hotpink"
  | "indianred"
  | "indigo"
  | "ivory"
  | "khaki"
  | "lavender"
  | "lavenderblush"
  | "lawngreen"
  | "lemonchiffon"
  | "lightblue"
  | "lightcoral"
  | "lightcyan"
  | "lightgoldenrodyellow"
  | "lightgray"
  | "lightgreen"
  | "lightgrey"
  | "lightpink"
  | "lightsalmon"
  | "lightseagreen"
  | "lightskyblue"
  | "lightslategray"
  | "lightslategrey"
  | "lightsteelblue"
  | "lightyellow"
  | "lime"
  | "limegreen"
  | "linen"
  | "magenta"
  | "maroon"
  | "mediumaquamarine"
  | "mediumblue"
  | "mediumorchid"
  | "mediumpurple"
  | "mediumseagreen"
  | "mediumslateblue"
  | "mediumspringgreen"
  | "mediumturquoise"
  | "mediumvioletred"
  | "midnightblue"
  | "mintcream"
  | "mistyrose"
  | "moccasin"
  | "navajowhite"
  | "navy"
  | "oldlace"
  | "olive"
  | "olivedrab"
  | "orange"
  | "orangered"
  | "orchid"
  | "palegoldenrod"
  | "palegreen"
  | "paleturquoise"
  | "palevioletred"
  | "papayawhip"
  | "peachpuff"
  | "peru"
  | "pink"
  | "plum"
  | "powderblue"
  | "purple"
  | "rebeccapurple"
  | "red"
  | "rosybrown"
  | "royalblue"
  | "saddlebrown"
  | "salmon"
  | "sandybrown"
  | "seagreen"
  | "seashell"
  | "sienna"
  | "silver"
  | "skyblue"
  | "slateblue"
  | "slategray"
  | "slategrey"
  | "snow"
  | "springgreen"
  | "steelblue"
  | "tan"
  | "teal"
  | "thistle"
  | "tomato"
  | "transparent"
  | "turquoise"
  | "violet"
  | "wheat"
  | "white"
  | "whitesmoke"
  | "yellow"
  | "yellowgreen";

type DeprecatedSystemColor =
  | "ActiveBorder"
  | "ActiveCaption"
  | "AppWorkspace"
  | "Background"
  | "ButtonFace"
  | "ButtonHighlight"
  | "ButtonShadow"
  | "ButtonText"
  | "CaptionText"
  | "GrayText"
  | "Highlight"
  | "HighlightText"
  | "InactiveBorder"
  | "InactiveCaption"
  | "InactiveCaptionText"
  | "InfoBackground"
  | "InfoText"
  | "Menu"
  | "MenuText"
  | "Scrollbar"
  | "ThreeDDarkShadow"
  | "ThreeDFace"
  | "ThreeDHighlight"
  | "ThreeDLightShadow"
  | "ThreeDShadow"
  | "Window"
  | "WindowFrame"
  | "WindowText";

type BgImage = "none" | string;

type RepeatStyle = "no-repeat" | "repeat" | "repeat-x" | "repeat-y" | "round" | "space";

type BgSize<TLength> = LengthPercentage<TLength> | "auto" | "contain" | "cover";

type LengthPercentage<TLength> = TLength | string;

type BrWidth<TLength> = TLength | "medium" | "thick" | "thin";

type BrStyle = "dashed" | "dotted" | "double" | "groove" | "hidden" | "inset" | "none" | "outset" | "ridge" | "solid";

type GeometryBox = ShapeBox | "fill-box" | "stroke-box" | "view-box";

type ShapeBox = Box | "margin-box";

type ContentList = Quote | "contents" | string;

type Quote = "close-quote" | "no-close-quote" | "no-open-quote" | "open-quote";

type DisplayOutside = "block" | "inline" | "run-in";

type DisplayInside = "flex" | "flow" | "flow-root" | "grid" | "ruby" | "subgrid" | "table";

type DisplayInternal =
  | "ruby-base"
  | "ruby-base-container"
  | "ruby-text"
  | "ruby-text-container"
  | "table-caption"
  | "table-cell"
  | "table-column"
  | "table-column-group"
  | "table-footer-group"
  | "table-header-group"
  | "table-row"
  | "table-row-group";

type DisplayBox = "contents" | "none";

type DisplayLegacy = "inline-block" | "inline-flex" | "inline-grid" | "inline-list-item" | "inline-table";

type GenericFamily = "cursive" | "fantasy" | "monospace" | "sans-serif" | "serif";

type FeatureTagValue = "off" | "on" | string | number;

type AbsoluteSize = "large" | "medium" | "small" | "x-large" | "x-small" | "xx-large" | "xx-small";

type RelativeSize = "larger" | "smaller";

type EastAsianVariantValues = "jis04" | "jis78" | "jis83" | "jis90" | "simplified" | "traditional";

type EastAsianWidthValues = "full-width" | "proportional-width";

type CommonLigValues = "common-ligatures" | "no-common-ligatures";

type DiscretionaryLigValues = "discretionary-ligatures" | "no-discretionary-ligatures";

type HistoricalLigValues = "historical-ligatures" | "no-historical-ligatures";

type ContextualAltValues = "contextual" | "no-contextual";

type NumericFigureValues = "lining-nums" | "oldstyle-nums";

type NumericSpacingValues = "proportional-nums" | "tabular-nums";

type NumericFractionValues = "diagonal-fractions" | "stacked-fractions";

type GridLine = "auto" | string;

type MaskLayer<TLength> = MaskReference | BgSize<TLength> | RepeatStyle | GeometryBox | CompositingOperator | MaskingMode | "no-clip" | string;

type MaskReference = "none" | string;

type CompositingOperator = "add" | "exclude" | "intersect" | "subtract";

type MaskingMode = "alpha" | "luminance" | "match-source";

type SingleTransition = SingleTransitionProperty | SingleTransitionTimingFunction | "none" | string;

type SingleTransitionProperty = "all" | string;

type SingleTransitionTimingFunction = SingleTimingFunction;

type AnimateableFeature = "contents" | "scroll-position" | string;

type CompositeStyle =
  | "clear"
  | "copy"
  | "destination-atop"
  | "destination-in"
  | "destination-out"
  | "destination-over"
  | "source-atop"
  | "source-in"
  | "source-out"
  | "source-over"
  | "xor";

type MaskPosition<TLength> = LengthPercentage<TLength> | "bottom" | "center" | "left" | "right" | "top";
