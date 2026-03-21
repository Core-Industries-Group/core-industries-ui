'use strict';

var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var nextThemes = require('next-themes');
var jsxRuntime = require('react/jsx-runtime');
var React2 = require('react');
var navigation = require('next/navigation');
var classVarianceAuthority = require('class-variance-authority');
var radixUi = require('radix-ui');
var lucideReact = require('lucide-react');
var framerMotion = require('framer-motion');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React2__default = /*#__PURE__*/_interopDefault(React2);

function cn(...inputs) {
  return tailwindMerge.twMerge(clsx.clsx(inputs));
}

// src/lib/animations.ts
var fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }
  })
};
var stagger = {
  visible: { transition: { staggerChildren: 0.08 } }
};
function ThemeProvider({ children }) {
  return /* @__PURE__ */ jsxRuntime.jsx(nextThemes.ThemeProvider, { attribute: "class", defaultTheme: "light", enableSystem: false, children });
}

// src/lib/animation-tracker.ts
var animatedPages = /* @__PURE__ */ new Set();
function shouldAnimatePage(pathname) {
  if (animatedPages.has(pathname)) return false;
  animatedPages.add(pathname);
  return true;
}
var AnimationContext = React2.createContext(true);
function usePageAnimation() {
  return React2.useContext(AnimationContext);
}
function PageAnimationGate({ children }) {
  const pathname = navigation.usePathname();
  const cache = React2.useRef({
    pathname: "",
    value: true
  });
  if (cache.current.pathname !== pathname) {
    cache.current = { pathname, value: shouldAnimatePage(pathname) };
  }
  return /* @__PURE__ */ jsxRuntime.jsx(AnimationContext.Provider, { value: cache.current.value, children });
}
var buttonVariants = classVarianceAuthority.cva(
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-full text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:bg-destructive/60 dark:focus-visible:ring-destructive/40",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        xs: "h-6 gap-1 px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-xs": "size-6 [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8",
        "icon-lg": "size-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}) {
  const Comp = asChild ? radixUi.Slot.Root : "button";
  return /* @__PURE__ */ jsxRuntime.jsx(
    Comp,
    {
      "data-slot": "button",
      "data-variant": variant,
      "data-size": size,
      className: cn(buttonVariants({ variant, size, className })),
      ...props
    }
  );
}
function Card({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      "data-slot": "card",
      className: cn(
        "flex flex-col gap-6 rounded-xl border bg-card py-6 text-card-foreground shadow-sm",
        className
      ),
      ...props
    }
  );
}
function CardHeader({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      "data-slot": "card-header",
      className: cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      ),
      ...props
    }
  );
}
function CardTitle({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      "data-slot": "card-title",
      className: cn("leading-none font-semibold", className),
      ...props
    }
  );
}
function CardDescription({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      "data-slot": "card-description",
      className: cn("text-sm text-muted-foreground", className),
      ...props
    }
  );
}
function CardAction({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      "data-slot": "card-action",
      className: cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      ),
      ...props
    }
  );
}
function CardContent({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      "data-slot": "card-content",
      className: cn("px-6", className),
      ...props
    }
  );
}
function CardFooter({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      "data-slot": "card-footer",
      className: cn("flex items-center px-6 [.border-t]:pt-6", className),
      ...props
    }
  );
}
var badgeVariants = classVarianceAuthority.cva(
  "inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary: "bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive: "bg-destructive text-white focus-visible:ring-destructive/20 dark:bg-destructive/60 dark:focus-visible:ring-destructive/40 [a&]:hover:bg-destructive/90",
        outline: "border-border text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
        ghost: "[a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
        link: "text-primary underline-offset-4 [a&]:hover:underline"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({
  className,
  variant = "default",
  asChild = false,
  ...props
}) {
  const Comp = asChild ? radixUi.Slot.Root : "span";
  return /* @__PURE__ */ jsxRuntime.jsx(
    Comp,
    {
      "data-slot": "badge",
      "data-variant": variant,
      className: cn(badgeVariants({ variant }), className),
      ...props
    }
  );
}
function Input({ className, type, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "input",
    {
      type,
      "data-slot": "input",
      className: cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-colors outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      ),
      ...props
    }
  );
}
function Label({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "label",
    {
      "data-slot": "label",
      className: cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      ),
      ...props
    }
  );
}
function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    radixUi.Separator.Root,
    {
      "data-slot": "separator",
      decorative,
      orientation,
      className: cn(
        "shrink-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className
      ),
      ...props
    }
  );
}
function Sheet({ ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(radixUi.Dialog.Root, { "data-slot": "sheet", ...props });
}
function SheetTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(radixUi.Dialog.Trigger, { "data-slot": "sheet-trigger", ...props });
}
function SheetClose({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(radixUi.Dialog.Close, { "data-slot": "sheet-close", ...props });
}
function SheetPortal({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(radixUi.Dialog.Portal, { "data-slot": "sheet-portal", ...props });
}
function SheetOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    radixUi.Dialog.Overlay,
    {
      "data-slot": "sheet-overlay",
      className: cn(
        "fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0",
        className
      ),
      ...props
    }
  );
}
function SheetContent({
  className,
  children,
  side = "right",
  showCloseButton = true,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsxs(SheetPortal, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(SheetOverlay, {}),
    /* @__PURE__ */ jsxRuntime.jsxs(
      radixUi.Dialog.Content,
      {
        "data-slot": "sheet-content",
        className: cn(
          "fixed z-50 flex flex-col gap-4 bg-background shadow-lg transition ease-in-out data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:animate-in data-[state=open]:duration-500",
          side === "right" && "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
          side === "left" && "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
          side === "top" && "inset-x-0 top-0 h-auto border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
          side === "bottom" && "inset-x-0 bottom-0 h-auto border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
          className
        ),
        ...props,
        children: [
          children,
          showCloseButton && /* @__PURE__ */ jsxRuntime.jsxs(radixUi.Dialog.Close, { className: "absolute top-4 right-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
            /* @__PURE__ */ jsxRuntime.jsx(lucideReact.XIcon, { className: "size-4" }),
            /* @__PURE__ */ jsxRuntime.jsx("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
function SheetHeader({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      "data-slot": "sheet-header",
      className: cn("flex flex-col gap-1.5 p-4", className),
      ...props
    }
  );
}
function SheetFooter({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      "data-slot": "sheet-footer",
      className: cn("mt-auto flex flex-col gap-2 p-4", className),
      ...props
    }
  );
}
function SheetTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    radixUi.Dialog.Title,
    {
      "data-slot": "sheet-title",
      className: cn("font-semibold text-foreground", className),
      ...props
    }
  );
}
function SheetDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    radixUi.Dialog.Description,
    {
      "data-slot": "sheet-description",
      className: cn("text-sm text-muted-foreground", className),
      ...props
    }
  );
}
function SectionPill({ children }) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "span",
    {
      className: "inline-flex items-center gap-2.5 rounded-full border border-border bg-white px-4 py-1.5 shadow-sm dark:border-white/[0.08] dark:bg-white/[0.04]",
      style: { boxShadow: "0 2px 12px rgba(0,0,0,0.04)" },
      children: [
        /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "relative flex h-1.5 w-1.5", children: [
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF602D] opacity-75" }),
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: "relative inline-flex h-1.5 w-1.5 rounded-full bg-[#FF602D]" })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-[0.8125rem] font-semibold uppercase tracking-[0.14em] text-foreground dark:text-white/60", children })
      ]
    }
  );
}
var steps = [
  { id: 1, label: "Name", field: "name", placeholder: "Your full name" },
  { id: 2, label: "Email", field: "email", placeholder: "you@example.com" },
  { id: 3, label: "Goal", field: "goal", placeholder: "What brings you here?" }
];
function MultiStepForm({ variant = "default" }) {
  const isOrange = variant === "onOrange" || variant === "modal";
  const [currentStep, setCurrentStep] = React2.useState(0);
  const [formData, setFormData] = React2.useState({});
  const [isComplete, setIsComplete] = React2.useState(false);
  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsComplete(true);
    }
  };
  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };
  const currentStepData = steps[currentStep];
  const progress = (currentStep + 1) / steps.length * 100;
  if (isComplete) {
    return /* @__PURE__ */ jsxRuntime.jsx("div", { className: "w-full max-w-sm", children: /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      {
        className: cn(
          "relative overflow-hidden rounded-2xl p-12",
          isOrange ? "bg-white shadow-xl" : "border border-border/50 bg-gradient-to-br from-background via-background to-muted/20 backdrop-blur"
        ),
        children: [
          !isOrange && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),transparent_50%)]" }),
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "relative flex flex-col items-center gap-4 animate-in fade-in zoom-in-95 duration-700", children: [
            /* @__PURE__ */ jsxRuntime.jsx(
              "div",
              {
                className: cn(
                  "flex h-16 w-16 items-center justify-center rounded-full",
                  isOrange ? "bg-[#FF602D]/10 border-2 border-[#FF602D]/20" : "border-2 border-foreground/10 bg-foreground/5"
                ),
                children: /* @__PURE__ */ jsxRuntime.jsx(
                  lucideReact.CheckIcon,
                  {
                    className: cn(
                      "h-8 w-8 animate-in zoom-in duration-500 delay-200",
                      isOrange ? "text-[#FF602D]" : "text-foreground"
                    ),
                    strokeWidth: 2.5
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "space-y-1 text-center", children: [
              /* @__PURE__ */ jsxRuntime.jsx(
                "h2",
                {
                  className: cn(
                    "text-xl font-medium tracking-tight text-balance",
                    isOrange ? "text-gray-900" : ""
                  ),
                  children: "You're all set"
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsx(
                "p",
                {
                  className: cn(
                    "text-sm",
                    isOrange ? "text-gray-500" : "text-muted-foreground/80"
                  ),
                  children: formData.name
                }
              )
            ] })
          ] })
        ]
      }
    ) });
  }
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      className: cn(
        "w-full max-w-sm",
        variant === "onOrange" && "rounded-2xl bg-white p-8 shadow-xl"
      ),
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "mb-10 flex items-center justify-center gap-3", children: steps.map((step, index) => /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntime.jsxs(
            "button",
            {
              onClick: () => index < currentStep && setCurrentStep(index),
              disabled: index > currentStep,
              className: cn(
                "group relative flex h-9 w-9 items-center justify-center rounded-full transition-all duration-700 ease-out",
                "disabled:cursor-not-allowed",
                isOrange ? cn(
                  index < currentStep && "bg-[#FF602D]/15 text-[#FF602D]",
                  index === currentStep && "bg-[#FF602D] text-white shadow-[0_0_20px_-5px_rgba(255,96,45,0.4)]",
                  index > currentStep && "bg-gray-100 text-gray-400 border border-gray-200"
                ) : cn(
                  index < currentStep && "bg-foreground/15 text-foreground/70",
                  index === currentStep && "bg-foreground text-background shadow-[0_0_20px_-5px_rgba(0,0,0,0.3)]",
                  index > currentStep && "bg-muted text-muted-foreground/60 border border-border"
                )
              ),
              children: [
                index < currentStep ? /* @__PURE__ */ jsxRuntime.jsx(
                  lucideReact.CheckIcon,
                  {
                    className: "h-4 w-4 animate-in zoom-in duration-500",
                    strokeWidth: 2.5
                  }
                ) : /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-sm font-medium tabular-nums", children: step.id }),
                index === currentStep && /* @__PURE__ */ jsxRuntime.jsx(
                  "div",
                  {
                    className: cn(
                      "absolute inset-0 rounded-full blur-md animate-pulse",
                      isOrange ? "bg-[#FF602D]/25" : "bg-foreground/20"
                    )
                  }
                )
              ]
            }
          ),
          index < steps.length - 1 && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "relative h-[1.5px] w-12", children: [
            /* @__PURE__ */ jsxRuntime.jsx(
              "div",
              {
                className: cn(
                  "absolute inset-0",
                  isOrange ? "bg-gray-200" : "bg-border"
                )
              }
            ),
            /* @__PURE__ */ jsxRuntime.jsx(
              "div",
              {
                className: cn(
                  "absolute inset-0 transition-all duration-700 ease-out origin-left",
                  isOrange ? "bg-[#FF602D]/40" : "bg-foreground/30"
                ),
                style: {
                  transform: `scaleX(${index < currentStep ? 1 : 0})`
                }
              }
            )
          ] })
        ] }, step.id)) }),
        /* @__PURE__ */ jsxRuntime.jsx(
          "div",
          {
            className: cn(
              "mb-8 overflow-hidden rounded-full h-[2px]",
              isOrange ? "bg-gray-200" : "bg-border"
            ),
            children: /* @__PURE__ */ jsxRuntime.jsx(
              "div",
              {
                className: cn(
                  "h-full transition-all duration-1000 ease-out",
                  isOrange ? "bg-gradient-to-r from-[#FF602D]/60 to-[#FF602D]" : "bg-gradient-to-r from-foreground/60 to-foreground"
                ),
                style: { width: `${progress}%` }
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "space-y-8", children: [
          /* @__PURE__ */ jsxRuntime.jsxs(
            "div",
            {
              className: "space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-700",
              children: [
                /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-baseline justify-between", children: [
                  /* @__PURE__ */ jsxRuntime.jsx(
                    Label,
                    {
                      htmlFor: currentStepData.field,
                      className: cn(
                        "text-lg font-medium tracking-tight",
                        isOrange && "text-gray-900"
                      ),
                      children: currentStepData.label
                    }
                  ),
                  /* @__PURE__ */ jsxRuntime.jsxs(
                    "span",
                    {
                      className: cn(
                        "text-xs font-medium tabular-nums",
                        isOrange ? "text-gray-400" : "text-muted-foreground/60"
                      ),
                      children: [
                        currentStep + 1,
                        "/",
                        steps.length
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntime.jsx("div", { className: "relative group", children: /* @__PURE__ */ jsxRuntime.jsx(
                  Input,
                  {
                    id: currentStepData.field,
                    type: currentStepData.field === "email" ? "email" : "text",
                    placeholder: currentStepData.placeholder,
                    value: formData[currentStepData.field] || "",
                    onChange: (e) => handleInputChange(currentStepData.field, e.target.value),
                    className: cn(
                      "h-14 text-base transition-all duration-500 shadow-sm",
                      isOrange ? "border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-400 focus:border-[#FF602D]/40 focus:ring-[#FF602D]/10" : "border-border focus:border-foreground/30 bg-card"
                    )
                  }
                ) })
              ]
            },
            currentStepData.id
          ),
          /* @__PURE__ */ jsxRuntime.jsx(
            Button,
            {
              onClick: handleNext,
              disabled: !formData[currentStepData.field]?.trim(),
              className: cn(
                "w-full h-12 group relative transition-all duration-300",
                isOrange ? "bg-[#FF602D] text-white hover:bg-[#D4501F] hover:shadow-lg hover:shadow-[#FF602D]/20 disabled:bg-gray-200 disabled:text-gray-400" : "hover:shadow-lg hover:shadow-foreground/5"
              ),
              children: /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "flex items-center justify-center gap-2 font-medium", children: [
                currentStep === steps.length - 1 ? "Complete" : "Continue",
                /* @__PURE__ */ jsxRuntime.jsx(
                  lucideReact.ArrowRightIcon,
                  {
                    className: "h-4 w-4 transition-transform group-hover:translate-x-0.5 duration-300",
                    strokeWidth: 2
                  }
                )
              ] })
            }
          ),
          currentStep > 0 && /* @__PURE__ */ jsxRuntime.jsx(
            "button",
            {
              onClick: () => setCurrentStep(currentStep - 1),
              className: cn(
                "w-full text-center text-sm transition-all duration-300",
                isOrange ? "text-gray-400 hover:text-gray-600" : "text-muted-foreground/60 hover:text-foreground/80"
              ),
              children: "Go back"
            }
          )
        ] })
      ]
    }
  );
}
var flipFront = {
  initial: { rotateX: 0, opacity: 1 },
  hover: { rotateX: -90, opacity: 0 }
};
var flipBack = {
  initial: { rotateX: 90, opacity: 0 },
  hover: { rotateX: 0, opacity: 1 }
};
var flipSpring = {
  type: "spring",
  stiffness: 100,
  damping: 20,
  duration: 0.5
};
function FlipText({ children }) {
  const ref = React2.useRef(null);
  const [hovered, setHovered] = React2.useState(false);
  React2.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const parent = el.closest("a, button");
    if (!parent) return;
    const enter = () => setHovered(true);
    const leave = () => setHovered(false);
    parent.addEventListener("mouseenter", enter);
    parent.addEventListener("mouseleave", leave);
    return () => {
      parent.removeEventListener("mouseenter", enter);
      parent.removeEventListener("mouseleave", leave);
    };
  }, []);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    framerMotion.motion.span,
    {
      ref,
      className: "relative inline-flex items-center justify-center",
      style: { perspective: "600px" },
      animate: hovered ? "hover" : "initial",
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.span,
          {
            className: "inline-flex items-center gap-2",
            variants: flipFront,
            transition: flipSpring,
            style: { transformStyle: "preserve-3d", transformOrigin: "center bottom" },
            children
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.span,
          {
            className: "absolute inset-0 inline-flex items-center justify-center gap-2",
            variants: flipBack,
            transition: flipSpring,
            style: {
              transformStyle: "preserve-3d",
              transformOrigin: "center top",
              rotateX: 90
            },
            children
          }
        )
      ]
    }
  );
}
var FlipWords = ({
  words,
  duration = 3e3,
  className
}) => {
  const [index, setIndex] = React2.useState(0);
  const [isAnimating, setIsAnimating] = React2.useState(false);
  const [isMobile, setIsMobile] = React2.useState(false);
  const timerRef = React2.useRef(null);
  const wordsRef = React2.useRef(words);
  wordsRef.current = words;
  React2.useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  const startAnimation = React2.useCallback(() => {
    setIndex((prev) => (prev + 1) % wordsRef.current.length);
    setIsAnimating(true);
  }, []);
  React2.useEffect(() => {
    if (!isAnimating) {
      timerRef.current = setTimeout(startAnimation, duration);
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isAnimating, duration, startAnimation]);
  const currentWord = words[index];
  return /* @__PURE__ */ jsxRuntime.jsx("span", { className: "inline-block relative", children: /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.AnimatePresence,
    {
      onExitComplete: () => {
        setIsAnimating(false);
      },
      children: /* @__PURE__ */ jsxRuntime.jsx(
        framerMotion.motion.span,
        {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          exit: isMobile ? {
            opacity: 0,
            y: -15,
            filter: "blur(4px)",
            position: "absolute"
          } : {
            opacity: 0,
            y: -40,
            x: 40,
            filter: "blur(8px)",
            scale: 2,
            position: "absolute"
          },
          transition: {
            type: "spring",
            stiffness: 100,
            damping: isMobile ? 18 : 10
          },
          className: cn(
            "z-10 inline-block relative text-center px-2",
            className
          ),
          children: isMobile ? /* @__PURE__ */ jsxRuntime.jsx("span", { className: "whitespace-nowrap", children: currentWord }) : currentWord.split(" ").map((word, wordIndex) => /* @__PURE__ */ jsxRuntime.jsxs(
            framerMotion.motion.span,
            {
              initial: { opacity: 0, y: 10, filter: "blur(8px)" },
              animate: { opacity: 1, y: 0, filter: "blur(0px)" },
              transition: {
                delay: wordIndex * 0.3,
                duration: 0.3
              },
              className: "inline-block whitespace-nowrap",
              children: [
                word.split("").map((letter, letterIndex) => /* @__PURE__ */ jsxRuntime.jsx(
                  framerMotion.motion.span,
                  {
                    initial: { opacity: 0, y: 10, filter: "blur(8px)" },
                    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
                    transition: {
                      delay: wordIndex * 0.3 + letterIndex * 0.05,
                      duration: 0.2
                    },
                    className: "inline-block",
                    children: letter
                  },
                  word + letterIndex
                )),
                /* @__PURE__ */ jsxRuntime.jsx("span", { className: "inline-block", children: "\xA0" })
              ]
            },
            word + wordIndex
          ))
        },
        currentWord
      )
    }
  ) });
};
var defaultContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};
var defaultItemVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};
var presetVariants = {
  fade: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    }
  },
  slide: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 }
    }
  },
  scale: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 }
    }
  },
  blur: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, filter: "blur(4px)" },
      visible: { opacity: 1, filter: "blur(0px)" }
    }
  },
  "blur-slide": {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, filter: "blur(4px)", y: 20 },
      visible: { opacity: 1, filter: "blur(0px)", y: 0 }
    }
  },
  zoom: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, scale: 0.5 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }
    }
  },
  flip: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, rotateX: -90 },
      visible: {
        opacity: 1,
        rotateX: 0,
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }
    }
  },
  bounce: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, y: -50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 400, damping: 10 }
      }
    }
  },
  rotate: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, rotate: -180 },
      visible: {
        opacity: 1,
        rotate: 0,
        transition: { type: "spring", stiffness: 200, damping: 15 }
      }
    }
  },
  swing: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, rotate: -10 },
      visible: {
        opacity: 1,
        rotate: 0,
        transition: { type: "spring", stiffness: 300, damping: 8 }
      }
    }
  }
};
function AnimatedGroup({
  children,
  className,
  variants,
  preset,
  skipAnimation
}) {
  const selectedVariants = preset ? presetVariants[preset] : { container: defaultContainerVariants, item: defaultItemVariants };
  const containerVariants = variants?.container || selectedVariants.container;
  const itemVariants = variants?.item || selectedVariants.item;
  return /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.div,
    {
      initial: skipAnimation ? false : "hidden",
      animate: "visible",
      variants: containerVariants,
      className: cn(className),
      children: React2__default.default.Children.map(children, (child, index) => /* @__PURE__ */ jsxRuntime.jsx(framerMotion.motion.div, { variants: itemVariants, children: child }, index))
    }
  );
}
function AnimatedGridPattern({
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  strokeDasharray = 0,
  numSquares = 50,
  className,
  maxOpacity = 0.5,
  duration = 4,
  repeatDelay = 0.5,
  ...props
}) {
  const id = React2.useId();
  const containerRef = React2.useRef(null);
  const [dimensions, setDimensions] = React2.useState({ width: 0, height: 0 });
  const [squares, setSquares] = React2.useState(() => generateSquares(numSquares));
  function getPos() {
    return [
      Math.floor(Math.random() * dimensions.width / width),
      Math.floor(Math.random() * dimensions.height / height)
    ];
  }
  function generateSquares(count) {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      pos: getPos()
    }));
  }
  const updateSquarePosition = (id2) => {
    setSquares(
      (currentSquares) => currentSquares.map(
        (sq) => sq.id === id2 ? {
          ...sq,
          pos: getPos()
        } : sq
      )
    );
  };
  React2.useEffect(() => {
    if (dimensions.width && dimensions.height) {
      setSquares(generateSquares(numSquares));
    }
  }, [dimensions, numSquares]);
  React2.useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setDimensions({
          width: entry.contentRect.width,
          height: entry.contentRect.height
        });
      }
    });
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }
    return () => {
      if (containerRef.current) {
        resizeObserver.unobserve(containerRef.current);
      }
    };
  }, [containerRef]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      ref: containerRef,
      "aria-hidden": "true",
      className: cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-gray-400/30 stroke-gray-400/30",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("defs", { children: /* @__PURE__ */ jsxRuntime.jsx(
          "pattern",
          {
            id,
            width,
            height,
            patternUnits: "userSpaceOnUse",
            x,
            y,
            children: /* @__PURE__ */ jsxRuntime.jsx(
              "path",
              {
                d: `M.5 ${height}V.5H${width}`,
                fill: "none",
                strokeDasharray
              }
            )
          }
        ) }),
        /* @__PURE__ */ jsxRuntime.jsx("rect", { width: "100%", height: "100%", fill: `url(#${id})` }),
        /* @__PURE__ */ jsxRuntime.jsx("svg", { x, y, className: "overflow-visible", children: squares.map(({ pos: [x2, y2], id: id2 }, index) => /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.rect,
          {
            initial: { opacity: 0 },
            animate: { opacity: maxOpacity },
            transition: {
              duration,
              repeat: 1,
              delay: index * 0.1,
              repeatType: "reverse"
            },
            onAnimationComplete: () => updateSquarePosition(id2),
            width: width - 1,
            height: height - 1,
            x: x2 * width + 1,
            y: y2 * height + 1,
            fill: "currentColor",
            strokeWidth: "0"
          },
          `${x2}-${y2}-${index}`
        )) })
      ]
    }
  );
}
var defaultStaggerTimes = {
  char: 0.03,
  word: 0.05,
  line: 0.1
};
var defaultContainerVariants2 = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  },
  exit: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};
var defaultItemVariants2 = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1
  },
  exit: { opacity: 0 }
};
var presetVariants2 = {
  blur: {
    container: defaultContainerVariants2,
    item: {
      hidden: { opacity: 0, filter: "blur(12px)" },
      visible: { opacity: 1, filter: "blur(0px)" },
      exit: { opacity: 0, filter: "blur(12px)" }
    }
  },
  shake: {
    container: defaultContainerVariants2,
    item: {
      hidden: { x: 0 },
      visible: { x: [-5, 5, -5, 5, 0], transition: { duration: 0.5 } },
      exit: { x: 0 }
    }
  },
  scale: {
    container: defaultContainerVariants2,
    item: {
      hidden: { opacity: 0, scale: 0 },
      visible: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0 }
    }
  },
  fade: {
    container: defaultContainerVariants2,
    item: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
      exit: { opacity: 0 }
    }
  },
  slide: {
    container: defaultContainerVariants2,
    item: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 20 }
    }
  }
};
var AnimationComponent = React2__default.default.memo(({ segment, variants, per, segmentWrapperClassName }) => {
  const content = per === "line" ? /* @__PURE__ */ jsxRuntime.jsx(framerMotion.motion.span, { variants, className: "block", children: segment }) : per === "word" ? /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      "aria-hidden": "true",
      variants,
      className: "inline-block whitespace-pre",
      children: segment
    }
  ) : /* @__PURE__ */ jsxRuntime.jsx(framerMotion.motion.span, { className: "inline-block whitespace-pre", children: segment.split("").map((char, charIndex) => /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      "aria-hidden": "true",
      variants,
      className: "inline-block whitespace-pre",
      children: char
    },
    `char-${charIndex}`
  )) });
  if (!segmentWrapperClassName) {
    return content;
  }
  const defaultWrapperClassName = per === "line" ? "block" : "inline-block";
  return /* @__PURE__ */ jsxRuntime.jsx("span", { className: cn(defaultWrapperClassName, segmentWrapperClassName), children: content });
});
AnimationComponent.displayName = "AnimationComponent";
function TextEffect({
  children,
  per = "word",
  as = "p",
  variants,
  className,
  preset,
  delay = 0,
  trigger = true,
  onAnimationComplete,
  segmentWrapperClassName
}) {
  let segments;
  if (per === "line") {
    segments = children.split("\n");
  } else if (per === "word") {
    segments = children.split(/(\s+)/);
  } else {
    segments = children.split("");
  }
  const MotionTag = framerMotion.motion[as];
  const selectedVariants = preset ? presetVariants2[preset] : { container: defaultContainerVariants2, item: defaultItemVariants2 };
  const containerVariants = variants?.container || selectedVariants.container;
  const itemVariants = variants?.item || selectedVariants.item;
  const ariaLabel = per === "line" ? void 0 : children;
  const stagger2 = defaultStaggerTimes[per];
  const delayedContainerVariants = {
    hidden: containerVariants.hidden,
    visible: {
      ...containerVariants.visible,
      transition: {
        ...containerVariants.visible?.transition,
        staggerChildren: containerVariants.visible?.transition?.staggerChildren || stagger2,
        delayChildren: delay
      }
    },
    exit: containerVariants.exit
  };
  return /* @__PURE__ */ jsxRuntime.jsx(framerMotion.AnimatePresence, { mode: "popLayout", children: trigger && /* @__PURE__ */ jsxRuntime.jsx(
    MotionTag,
    {
      initial: "hidden",
      animate: "visible",
      exit: "exit",
      "aria-label": ariaLabel,
      variants: delayedContainerVariants,
      className: cn("whitespace-pre-wrap", className),
      onAnimationComplete,
      children: segments.map((segment, index) => /* @__PURE__ */ jsxRuntime.jsx(
        AnimationComponent,
        {
          segment,
          variants: itemVariants,
          per,
          segmentWrapperClassName
        },
        `${per}-${index}-${segment}`
      ))
    }
  ) });
}
var Highlight = ({
  children,
  className,
  delay = 0.5,
  duration = 2
}) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.span,
    {
      initial: {
        backgroundSize: "0% 100%"
      },
      animate: {
        backgroundSize: "100% 100%"
      },
      transition: {
        duration,
        ease: "linear",
        delay
      },
      style: {
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline"
      },
      className: cn(
        "relative inline-block pb-1 px-1 rounded-lg bg-gradient-to-r from-[rgba(255,96,45,0.35)] via-[rgba(254,141,63,0.28)] to-[rgba(212,80,31,0.38)] dark:from-[rgba(255,96,45,0.4)] dark:via-[rgba(254,141,63,0.32)] dark:to-[rgba(212,80,31,0.42)]",
        className
      ),
      children
    }
  );
};
function ScrollProgress() {
  const { scrollYProgress } = framerMotion.useScroll();
  const scaleX = framerMotion.useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 30,
    restDelta: 1e-3
  });
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      className: "fixed inset-x-0 top-0 z-[60] pointer-events-none hidden md:block",
      style: { height: "4px" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
        framerMotion.motion.div,
        {
          className: "h-full origin-left rounded-r-full",
          style: {
            scaleX,
            background: "#FF602D",
            boxShadow: "0 1px 4px rgba(255, 96, 45, 0.4), 0 1px 2px rgba(0, 0, 0, 0.08)"
          }
        }
      )
    }
  );
}
function NoiseTexture() {
  return /* @__PURE__ */ jsxRuntime.jsxs("svg", { className: "noise-overlay", "aria-hidden": "true", children: [
    /* @__PURE__ */ jsxRuntime.jsx("filter", { id: "noise", children: /* @__PURE__ */ jsxRuntime.jsx(
      "feTurbulence",
      {
        type: "fractalNoise",
        baseFrequency: "0.8",
        numOctaves: "4",
        stitchTiles: "stitch"
      }
    ) }),
    /* @__PURE__ */ jsxRuntime.jsx("rect", { width: "100%", height: "100%", filter: "url(#noise)" })
  ] });
}
var GradientBars = ({
  numBars = 15,
  gradientFrom = "rgb(255, 96, 45)",
  gradientTo = "transparent",
  animationDuration = 2,
  className = "",
  flipped = false
}) => {
  const calculateHeight = (index, total) => {
    const position = index / (total - 1);
    const maxHeight = 100;
    const minHeight = 30;
    const center = 0.5;
    const distanceFromCenter = Math.abs(position - center);
    const heightPercentage = Math.pow(distanceFromCenter * 2, 1.2);
    return Math.round(
      (minHeight + (maxHeight - minHeight) * heightPercentage) * 1e3
    ) / 1e3;
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsx("style", { children: `
        @keyframes pulseBar {
          0% { transform: scaleY(var(--initial-scale)); }
          100% { transform: scaleY(calc(var(--initial-scale) * 0.7)); }
        }
      ` }),
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: `absolute inset-0 z-0 overflow-hidden ${className}`, children: /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        className: "flex h-full",
        style: {
          width: "100%",
          transform: "translateZ(0)",
          backfaceVisibility: "hidden",
          WebkitFontSmoothing: "antialiased"
        },
        children: Array.from({ length: numBars }).map((_, index) => {
          const height = calculateHeight(index, numBars);
          return /* @__PURE__ */ jsxRuntime.jsx(
            "div",
            {
              style: {
                flex: `1 0 calc(100% / ${numBars})`,
                maxWidth: `calc(100% / ${numBars} + 1px)`,
                marginRight: "-1px",
                height: "100%",
                background: `linear-gradient(${flipped ? "to bottom" : "to top"}, ${gradientFrom}, ${gradientTo})`,
                transform: `scaleY(${height / 100})`,
                transformOrigin: flipped ? "top" : "bottom",
                transition: "transform 0.5s ease-in-out",
                animation: `pulseBar ${animationDuration}s ease-in-out infinite alternate`,
                animationDelay: `${index * 0.1}s`,
                boxSizing: "border-box",
                // @ts-ignore
                "--initial-scale": height / 100
              }
            },
            index
          );
        })
      }
    ) })
  ] });
};
function GradientBarsBackground({
  numBars = 7,
  gradientFrom = "rgb(255, 96, 45)",
  gradientTo = "transparent",
  animationDuration = 2,
  backgroundColor = "rgb(10, 10, 10)",
  children
}) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "section",
    {
      className: "relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden",
      style: { backgroundColor },
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          GradientBars,
          {
            numBars,
            gradientFrom,
            gradientTo,
            animationDuration
          }
        ),
        children && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "relative z-10 w-full h-full flex items-center justify-center px-4", children })
      ]
    }
  );
}
var FlickeringGrid = ({
  squareSize = 4,
  gridGap = 6,
  flickerChance = 0.3,
  color = "rgb(39, 39, 39)",
  width,
  height,
  className,
  maxOpacity = 0.3
}) => {
  const canvasRef = React2.useRef(null);
  const containerRef = React2.useRef(null);
  const [isInView, setIsInView] = React2.useState(false);
  const [canvasSize, setCanvasSize] = React2.useState({ width: 0, height: 0 });
  const memoizedColor = React2.useMemo(() => {
    const toRGBA = (color2) => {
      if (typeof window === "undefined") {
        return `rgba(0, 0, 0,`;
      }
      const canvas = document.createElement("canvas");
      canvas.width = canvas.height = 1;
      const ctx = canvas.getContext("2d");
      if (!ctx) return "rgba(255, 0, 0,";
      ctx.fillStyle = color2;
      ctx.fillRect(0, 0, 1, 1);
      const [r, g, b] = Array.from(ctx.getImageData(0, 0, 1, 1).data);
      return `rgba(${r}, ${g}, ${b},`;
    };
    return toRGBA(color);
  }, [color]);
  const setupCanvas = React2.useCallback(
    (canvas, width2, height2) => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width2 * dpr;
      canvas.height = height2 * dpr;
      canvas.style.width = `${width2}px`;
      canvas.style.height = `${height2}px`;
      const cols = Math.floor(width2 / (squareSize + gridGap));
      const rows = Math.floor(height2 / (squareSize + gridGap));
      const squares = new Float32Array(cols * rows);
      for (let i = 0; i < squares.length; i++) {
        squares[i] = Math.random() * maxOpacity;
      }
      return { cols, rows, squares, dpr };
    },
    [squareSize, gridGap, maxOpacity]
  );
  const updateSquares = React2.useCallback(
    (squares, deltaTime) => {
      for (let i = 0; i < squares.length; i++) {
        if (Math.random() < flickerChance * deltaTime) {
          squares[i] = Math.random() * maxOpacity;
        }
      }
    },
    [flickerChance, maxOpacity]
  );
  const drawGrid = React2.useCallback(
    (ctx, width2, height2, cols, rows, squares, dpr) => {
      ctx.clearRect(0, 0, width2, height2);
      ctx.fillStyle = "transparent";
      ctx.fillRect(0, 0, width2, height2);
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const opacity = squares[i * rows + j];
          ctx.fillStyle = `${memoizedColor}${opacity})`;
          ctx.fillRect(
            i * (squareSize + gridGap) * dpr,
            j * (squareSize + gridGap) * dpr,
            squareSize * dpr,
            squareSize * dpr
          );
        }
      }
    },
    [memoizedColor, squareSize, gridGap]
  );
  React2.useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animationFrameId;
    let gridParams;
    const updateCanvasSize = () => {
      const newWidth = width || container.clientWidth;
      const newHeight = height || container.clientHeight;
      setCanvasSize({ width: newWidth, height: newHeight });
      gridParams = setupCanvas(canvas, newWidth, newHeight);
    };
    updateCanvasSize();
    let lastTime = 0;
    const animate = (time) => {
      if (!isInView) return;
      const deltaTime = (time - lastTime) / 1e3;
      lastTime = time;
      updateSquares(gridParams.squares, deltaTime);
      drawGrid(
        ctx,
        canvas.width,
        canvas.height,
        gridParams.cols,
        gridParams.rows,
        gridParams.squares,
        gridParams.dpr
      );
      animationFrameId = requestAnimationFrame(animate);
    };
    const resizeObserver = new ResizeObserver(() => {
      updateCanvasSize();
    });
    resizeObserver.observe(container);
    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0 }
    );
    intersectionObserver.observe(canvas);
    if (isInView) {
      animationFrameId = requestAnimationFrame(animate);
    }
    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
    };
  }, [setupCanvas, updateSquares, drawGrid, width, height, isInView]);
  return /* @__PURE__ */ jsxRuntime.jsx("div", { ref: containerRef, className: `w-full h-full ${className}`, children: /* @__PURE__ */ jsxRuntime.jsx(
    "canvas",
    {
      ref: canvasRef,
      className: "pointer-events-none",
      style: {
        width: canvasSize.width,
        height: canvasSize.height
      }
    }
  ) });
};
var Spotlight = ({
  gradientFirst = "radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(210, 100%, 85%, .08) 0, hsla(210, 100%, 55%, .02) 50%, hsla(210, 100%, 45%, 0) 80%)",
  gradientSecond = "radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, .06) 0, hsla(210, 100%, 55%, .02) 80%, transparent 100%)",
  gradientThird = "radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, .04) 0, hsla(210, 100%, 45%, .02) 80%, transparent 100%)",
  translateY = -350,
  width = 560,
  height = 1380,
  smallWidth = 240,
  duration = 7,
  xOffset = 100
} = {}) => {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    framerMotion.motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 1.5 },
      className: "pointer-events-none absolute inset-0 h-full w-full",
      children: [
        /* @__PURE__ */ jsxRuntime.jsxs(
          framerMotion.motion.div,
          {
            animate: { x: [0, xOffset, 0] },
            transition: {
              duration,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            },
            className: "absolute top-0 left-0 w-screen h-screen z-40 pointer-events-none",
            children: [
              /* @__PURE__ */ jsxRuntime.jsx(
                "div",
                {
                  style: {
                    transform: `translateY(${translateY}px) rotate(-45deg)`,
                    background: gradientFirst,
                    width: `${width}px`,
                    height: `${height}px`
                  },
                  className: "absolute top-0 left-0"
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsx(
                "div",
                {
                  style: {
                    transform: "rotate(-45deg) translate(5%, -50%)",
                    background: gradientSecond,
                    width: `${smallWidth}px`,
                    height: `${height}px`
                  },
                  className: "absolute top-0 left-0 origin-top-left"
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsx(
                "div",
                {
                  style: {
                    transform: "rotate(-45deg) translate(-180%, -70%)",
                    background: gradientThird,
                    width: `${smallWidth}px`,
                    height: `${height}px`
                  },
                  className: "absolute top-0 left-0 origin-top-left"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsxs(
          framerMotion.motion.div,
          {
            animate: { x: [0, -xOffset, 0] },
            transition: {
              duration,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            },
            className: "absolute top-0 right-0 w-screen h-screen z-40 pointer-events-none",
            children: [
              /* @__PURE__ */ jsxRuntime.jsx(
                "div",
                {
                  style: {
                    transform: `translateY(${translateY}px) rotate(45deg)`,
                    background: gradientFirst,
                    width: `${width}px`,
                    height: `${height}px`
                  },
                  className: "absolute top-0 right-0"
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsx(
                "div",
                {
                  style: {
                    transform: "rotate(45deg) translate(-5%, -50%)",
                    background: gradientSecond,
                    width: `${smallWidth}px`,
                    height: `${height}px`
                  },
                  className: "absolute top-0 right-0 origin-top-right"
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsx(
                "div",
                {
                  style: {
                    transform: "rotate(45deg) translate(180%, -70%)",
                    background: gradientThird,
                    width: `${smallWidth}px`,
                    height: `${height}px`
                  },
                  className: "absolute top-0 right-0 origin-top-right"
                }
              )
            ]
          }
        )
      ]
    }
  );
};
function ProgressiveBlur({
  className = "",
  blurIntensity = 10
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      className: cn(className),
      style: {
        backdropFilter: `blur(${blurIntensity}px)`,
        WebkitBackdropFilter: `blur(${blurIntensity}px)`,
        mask: "linear-gradient(to top, black 0%, black 60%, rgba(0,0,0,0.95) 65%, rgba(0,0,0,0.9) 70%, rgba(0,0,0,0.8) 75%, rgba(0,0,0,0.6) 80%, rgba(0,0,0,0.4) 85%, rgba(0,0,0,0.2) 90%, rgba(0,0,0,0.1) 95%, transparent 100%)",
        WebkitMask: "linear-gradient(to top, black 0%, black 60%, rgba(0,0,0,0.95) 65%, rgba(0,0,0,0.9) 70%, rgba(0,0,0,0.8) 75%, rgba(0,0,0,0.6) 80%, rgba(0,0,0,0.4) 85%, rgba(0,0,0,0.2) 90%, rgba(0,0,0,0.1) 95%, transparent 100%)"
      }
    }
  );
}
function ProgressiveBlurCard({
  imageSrc,
  imageAlt,
  title,
  subtitle,
  href,
  className
}) {
  const Wrapper = href ? "a" : "div";
  const wrapperProps = href ? { href } : {};
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      className: cn(
        "group/card relative aspect-square w-[380px] overflow-hidden rounded-3xl border-8 border-white transition-all duration-500 hover:scale-[1.02] dark:border-[#1A1A24]",
        className
      ),
      style: {
        boxShadow: "0 4px 24px rgba(0,0,0,0.08), 0 12px 48px rgba(0,0,0,0.06)"
      },
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "img",
          {
            src: imageSrc,
            alt: imageAlt,
            className: "absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover/card:scale-105"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          ProgressiveBlur,
          {
            className: "pointer-events-none absolute bottom-0 left-0 h-[40%] w-full rounded-b-[20px]",
            blurIntensity: 8
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent transition-colors duration-300 group-hover/card:from-black/60", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-end justify-between px-6 py-6", children: [
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-col transition-transform duration-300 group-hover/card:-translate-y-0.5", children: [
            /* @__PURE__ */ jsxRuntime.jsx("h2", { className: "text-lg font-semibold text-white transition-all duration-300 group-hover/card:text-xl", children: title }),
            /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm text-white/90 transition-colors duration-300 group-hover/card:text-white", children: subtitle })
          ] }),
          /* @__PURE__ */ jsxRuntime.jsx(
            Wrapper,
            {
              ...wrapperProps,
              className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white shadow-lg ring-1 ring-black/5 transition-all duration-300 hover:scale-110 hover:rotate-12 hover:shadow-xl active:scale-95",
              children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ArrowRight, { className: "h-5 w-5 text-gray-800 transition-colors duration-300 group-hover/card:text-[#FF602D]" })
            }
          )
        ] }) })
      ]
    }
  );
}
var AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}) => {
  return /* @__PURE__ */ jsxRuntime.jsx("main", { children: /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      className: cn(
        "relative flex flex-col h-[100vh] items-center justify-center bg-zinc-50 dark:bg-[#272727] text-slate-950 transition-bg",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "absolute inset-0 overflow-hidden", children: /* @__PURE__ */ jsxRuntime.jsx(
          "div",
          {
            className: cn(
              `
            [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)]
            [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)]
            [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)]
            [background-image:var(--white-gradient),var(--aurora)]
            dark:[background-image:var(--dark-gradient),var(--aurora)]
            [background-size:300%,_200%]
            [background-position:50%_50%,50%_50%]
            filter blur-[10px] invert dark:invert-0
            after:content-[""] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)]
            after:dark:[background-image:var(--dark-gradient),var(--aurora)]
            after:[background-size:200%,_100%]
            after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
            pointer-events-none
            absolute -inset-[10px] opacity-50 will-change-transform`,
              showRadialGradient && `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`
            )
          }
        ) }),
        children
      ]
    }
  ) });
};
var AvatarCircles = ({
  numPeople,
  className,
  avatarUrls
}) => {
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: cn("z-10 flex -space-x-4 rtl:space-x-reverse", className), children: [
    avatarUrls.map((url, index) => /* @__PURE__ */ jsxRuntime.jsx(
      "img",
      {
        className: "h-10 w-10 rounded-full border-2 border-white dark:border-gray-800",
        src: url,
        width: 40,
        height: 40,
        alt: `Avatar ${index + 1}`
      },
      index
    )),
    numPeople && /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-[#272727] text-center text-xs font-medium text-white dark:border-gray-800 dark:bg-white dark:text-[#272727]", children: [
      "+",
      numPeople
    ] })
  ] });
};
function DisplayCard({
  className,
  icon = /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Sparkles, { className: "size-4" }),
  title = "Featured",
  description = "Discover amazing content",
  date = "Just now",
  iconClassName = "bg-primary/15 text-primary",
  titleClassName = "text-primary"
}) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    framerMotion.motion.div,
    {
      whileHover: { y: -12, scale: 1.03 },
      transition: { type: "spring", stiffness: 300, damping: 20 },
      className: cn(
        "relative flex h-40 w-[22rem] select-none flex-col justify-between rounded-2xl border border-border/60 bg-card/90 px-5 py-4 shadow-lg backdrop-blur-md transition-shadow duration-500 hover:shadow-xl dark:border-white/[0.08] dark:bg-white/[0.06]",
        className
      ),
      children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            "span",
            {
              className: cn(
                "inline-flex items-center justify-center rounded-xl p-2",
                iconClassName
              ),
              children: icon
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx("p", { className: cn("text-base font-semibold", titleClassName), children: title })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm leading-relaxed text-foreground/80 dark:text-white/70", children: description }),
        /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-xs text-muted-foreground dark:text-white/30", children: date })
      ]
    }
  );
}
function DisplayCards({ cards }) {
  const defaultCards = [
    {
      icon: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.FileText, { className: "size-4" }),
      title: "Document Generated",
      description: "Construction permit package auto-filled from project data",
      date: "2 minutes ago",
      iconClassName: "bg-primary/15 text-primary",
      titleClassName: "text-primary",
      className: "translate-x-4 -translate-y-8 rotate-[-2deg]"
    },
    {
      icon: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.BarChart3, { className: "size-4" }),
      title: "Compliance Check",
      description: "All 14 required fields validated against county standards",
      date: "Just now",
      iconClassName: "bg-emerald-500/15 text-emerald-500 dark:bg-emerald-400/15 dark:text-emerald-400",
      titleClassName: "text-emerald-600 dark:text-emerald-400",
      className: "translate-x-12 translate-y-4 rotate-[1deg]"
    },
    {
      icon: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Zap, { className: "size-4" }),
      title: "Workflow Active",
      description: "Client onboarding sequence running for Meridian Properties",
      date: "5 minutes ago",
      iconClassName: "bg-blue-500/15 text-blue-500 dark:bg-blue-400/15 dark:text-blue-400",
      titleClassName: "text-blue-600 dark:text-blue-400",
      className: "translate-x-20 translate-y-16 rotate-[-1deg]"
    }
  ];
  const displayCards = cards || defaultCards;
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "relative h-[500px] w-full", children: [
    /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      {
        className: "absolute inset-0 overflow-hidden",
        style: {
          clipPath: "polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%)"
        },
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            "div",
            {
              className: "absolute inset-0",
              style: {
                background: `linear-gradient(135deg,
              transparent 10%,
              rgba(255, 96, 45, 0.06) 25%,
              rgba(255, 96, 45, 0.1) 45%,
              rgba(255, 96, 45, 0.06) 65%,
              transparent 80%)`
              }
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(
            "div",
            {
              className: "absolute inset-0 hidden dark:block",
              style: {
                background: `linear-gradient(135deg,
              transparent 10%,
              rgba(255, 96, 45, 0.08) 25%,
              rgba(255, 96, 45, 0.14) 45%,
              rgba(255, 96, 45, 0.08) 65%,
              transparent 80%)`
              }
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(
            "div",
            {
              className: "absolute inset-0 opacity-[0.04] dark:opacity-[0.03]",
              style: {
                backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 0.5px, transparent 0)",
                backgroundSize: "24px 24px"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "relative", style: { width: "420px", height: "400px" }, children: displayCards.map((cardProps, index) => /* @__PURE__ */ jsxRuntime.jsx(
            "div",
            {
              className: "absolute left-0 top-0",
              style: { zIndex: index },
              children: /* @__PURE__ */ jsxRuntime.jsx(DisplayCard, { ...cardProps })
            },
            index
          )) }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: "pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" })
  ] });
}
function FloatingLogos({ logos, className }) {
  const defaultLogos = [
    { icon: /* @__PURE__ */ jsxRuntime.jsx(PlaceholderIcon, { label: "S", color: "#4A90D9" }), size: 52, top: "12%", left: "8%", rotate: -15, delay: 0, zIndex: 2 },
    { icon: /* @__PURE__ */ jsxRuntime.jsx(PlaceholderIcon, { label: "G", color: "#34A853" }), size: 44, top: "28%", left: "42%", rotate: 12, delay: 0.3, zIndex: 3 },
    { icon: /* @__PURE__ */ jsxRuntime.jsx(PlaceholderIcon, { label: "X", color: "#1D6F42" }), size: 38, top: "18%", left: "26%", rotate: -8, delay: 0.6, zIndex: 1 },
    { icon: /* @__PURE__ */ jsxRuntime.jsx(PlaceholderIcon, { label: "N", color: "#E01E5A" }), size: 48, top: "5%", left: "55%", rotate: 20, delay: 0.15, zIndex: 2 },
    { icon: /* @__PURE__ */ jsxRuntime.jsx(PlaceholderIcon, { label: "Q", color: "#FF602D" }), size: 56, top: "45%", left: "5%", rotate: -22, delay: 0.45, zIndex: 4 },
    { icon: /* @__PURE__ */ jsxRuntime.jsx(PlaceholderIcon, { label: "Z", color: "#6366F1" }), size: 40, top: "55%", left: "35%", rotate: 8, delay: 0.75, zIndex: 1 },
    { icon: /* @__PURE__ */ jsxRuntime.jsx(PlaceholderIcon, { label: "D", color: "#0EA5E9" }), size: 46, top: "65%", left: "18%", rotate: -12, delay: 0.9, zIndex: 3 },
    { icon: /* @__PURE__ */ jsxRuntime.jsx(PlaceholderIcon, { label: "A", color: "#F59E0B" }), size: 36, top: "38%", left: "52%", rotate: 25, delay: 0.2, zIndex: 2 },
    { icon: /* @__PURE__ */ jsxRuntime.jsx(PlaceholderIcon, { label: "P", color: "#EF4444" }), size: 42, top: "75%", left: "45%", rotate: -18, delay: 0.55, zIndex: 1 },
    { icon: /* @__PURE__ */ jsxRuntime.jsx(PlaceholderIcon, { label: "R", color: "#8B5CF6" }), size: 50, top: "82%", left: "8%", rotate: 15, delay: 0.35, zIndex: 2 }
  ];
  const items = logos || defaultLogos;
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn("relative h-full w-full", className), children: items.map((logo, i) => /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.div,
    {
      className: "absolute",
      style: {
        top: logo.top,
        left: logo.left,
        zIndex: logo.zIndex || 1
      },
      initial: { opacity: 0, scale: 0.6, rotate: (logo.rotate || 0) - 10 },
      animate: { opacity: 1, scale: 1, rotate: logo.rotate || 0 },
      transition: {
        duration: 0.8,
        delay: (logo.delay || 0) + 0.3,
        ease: [0.16, 1, 0.3, 1]
      },
      children: /* @__PURE__ */ jsxRuntime.jsx(
        framerMotion.motion.div,
        {
          animate: {
            y: [0, -6, 0, 4, 0],
            rotate: [
              logo.rotate || 0,
              (logo.rotate || 0) + 2,
              logo.rotate || 0,
              (logo.rotate || 0) - 1,
              logo.rotate || 0
            ]
          },
          transition: {
            duration: 5 + i % 3 * 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: logo.delay || 0
          },
          children: /* @__PURE__ */ jsxRuntime.jsx(
            "div",
            {
              className: "flex items-center justify-center rounded-2xl border border-border/50 bg-card/80 shadow-md backdrop-blur-sm transition-shadow duration-300 hover:shadow-lg dark:border-white/[0.08] dark:bg-white/[0.06]",
              style: {
                width: logo.size || 48,
                height: logo.size || 48
              },
              children: logo.icon
            }
          )
        }
      )
    },
    i
  )) });
}
function PlaceholderIcon({ label, color }) {
  return /* @__PURE__ */ jsxRuntime.jsx("span", { className: "select-none text-sm font-bold", style: { color }, children: label });
}

exports.AnimatedGridPattern = AnimatedGridPattern;
exports.AnimatedGroup = AnimatedGroup;
exports.AuroraBackground = AuroraBackground;
exports.AvatarCircles = AvatarCircles;
exports.Badge = Badge;
exports.Button = Button;
exports.Card = Card;
exports.CardAction = CardAction;
exports.CardContent = CardContent;
exports.CardDescription = CardDescription;
exports.CardFooter = CardFooter;
exports.CardHeader = CardHeader;
exports.CardTitle = CardTitle;
exports.DisplayCard = DisplayCard;
exports.DisplayCards = DisplayCards;
exports.FlickeringGrid = FlickeringGrid;
exports.FlipText = FlipText;
exports.FlipWords = FlipWords;
exports.FloatingLogos = FloatingLogos;
exports.GradientBars = GradientBars;
exports.GradientBarsBackground = GradientBarsBackground;
exports.Highlight = Highlight;
exports.Input = Input;
exports.Label = Label;
exports.MultiStepForm = MultiStepForm;
exports.NoiseTexture = NoiseTexture;
exports.PageAnimationGate = PageAnimationGate;
exports.ProgressiveBlurCard = ProgressiveBlurCard;
exports.ScrollProgress = ScrollProgress;
exports.SectionPill = SectionPill;
exports.Separator = Separator;
exports.Sheet = Sheet;
exports.SheetClose = SheetClose;
exports.SheetContent = SheetContent;
exports.SheetDescription = SheetDescription;
exports.SheetFooter = SheetFooter;
exports.SheetHeader = SheetHeader;
exports.SheetTitle = SheetTitle;
exports.SheetTrigger = SheetTrigger;
exports.Spotlight = Spotlight;
exports.TextEffect = TextEffect;
exports.ThemeProvider = ThemeProvider;
exports.badgeVariants = badgeVariants;
exports.buttonVariants = buttonVariants;
exports.cn = cn;
exports.fadeUp = fadeUp;
exports.shouldAnimatePage = shouldAnimatePage;
exports.stagger = stagger;
exports.usePageAnimation = usePageAnimation;
