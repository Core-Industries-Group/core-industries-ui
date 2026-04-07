"use client";

import { useState } from "react";
import { Button } from "./button";
import { Input } from "./input";
import { Label } from "./label";
import { cn } from "../../lib/utils";
import { CheckIcon, ArrowRightIcon } from "lucide-react";

type Step = {
  id: number;
  label: string;
  field: string;
  placeholder: string;
};

const steps: Step[] = [
  { id: 1, label: "Name", field: "name", placeholder: "Your full name" },
  { id: 2, label: "Email", field: "email", placeholder: "you@example.com" },
  { id: 3, label: "Goal", field: "goal", placeholder: "What brings you here?" },
];

export function MultiStepForm({ variant = "default" }: { variant?: "default" | "onOrange" | "modal" }) {
  const isOrange = variant === "onOrange";
  const isModal = variant === "modal";
  const isAccented = isOrange || isModal;
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [isComplete, setIsComplete] = useState(false);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsComplete(true);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const currentStepData = steps[currentStep];

  if (isComplete) {
    return (
      <div className="w-full max-w-sm">
        <div
          className={cn(
            "relative overflow-hidden rounded-2xl p-12",
            isOrange
              ? "bg-white shadow-xl"
              : isModal
                ? "bg-white shadow-xl dark:bg-card dark:shadow-none dark:border dark:border-border/50"
                : "border border-border/50 bg-gradient-to-br from-background via-background to-muted/20 backdrop-blur"
          )}
        >
          {!isAccented && (
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),transparent_50%)]" />
          )}
          <div className="relative flex flex-col items-center gap-4 animate-in fade-in zoom-in-95 duration-700">
            <div
              className={cn(
                "flex h-16 w-16 items-center justify-center rounded-full",
                isAccented
                  ? "bg-[#FF602D]/10 border-2 border-[#FF602D]/20"
                  : "border-2 border-foreground/10 bg-foreground/5"
              )}
            >
              <CheckIcon
                className={cn(
                  "h-8 w-8 animate-in zoom-in duration-500 delay-200",
                  isAccented ? "text-[#FF602D]" : "text-foreground"
                )}
                strokeWidth={2.5}
              />
            </div>
            <div className="space-y-1 text-center">
              <h2
                className={cn(
                  "text-xl font-medium tracking-tight text-balance",
                  isOrange ? "text-gray-900" : isModal ? "text-gray-900 dark:text-foreground" : ""
                )}
              >
                You&apos;re all set
              </h2>
              <p
                className={cn(
                  "text-sm",
                  isOrange ? "text-gray-500" : isModal ? "text-gray-500 dark:text-muted-foreground" : "text-muted-foreground/80"
                )}
              >
                {formData.name}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "w-full max-w-sm",
        variant === "onOrange" && "rounded-2xl bg-white p-8 shadow-xl"
      )}
    >
      <div className="mb-10 flex items-center">
        {steps.map((step, index) => (
          <div key={step.id} className={cn("flex items-center", index < steps.length - 1 && "flex-1")}>
            <button
              onClick={() => index < currentStep && setCurrentStep(index)}
              disabled={index > currentStep}
              className={cn(
                "group relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-700 ease-out",
                "disabled:cursor-not-allowed",
                isAccented
                  ? cn(
                      index < currentStep && "bg-[#FF602D]/15 text-[#FF602D]",
                      index === currentStep &&
                        "bg-[#FF602D] text-white shadow-[0_0_20px_-5px_rgba(255,96,45,0.4)]",
                      index > currentStep && (
                        isOrange
                          ? "bg-gray-100 text-gray-400 border border-gray-200"
                          : "bg-muted text-muted-foreground/60 border border-border"
                      )
                    )
                  : cn(
                      index < currentStep && "bg-foreground/15 text-foreground/70",
                      index === currentStep &&
                        "bg-foreground text-background shadow-[0_0_20px_-5px_rgba(0,0,0,0.3)]",
                      index > currentStep &&
                        "bg-muted text-muted-foreground/60 border border-border"
                    )
              )}
            >
              {index < currentStep ? (
                <CheckIcon
                  className="h-4 w-4 animate-in zoom-in duration-500"
                  strokeWidth={2.5}
                />
              ) : (
                <span className="text-sm font-medium tabular-nums">{step.id}</span>
              )}
              {index === currentStep && (
                <div
                  className={cn(
                    "absolute inset-0 rounded-full blur-md animate-pulse",
                    isAccented ? "bg-[#FF602D]/25" : "bg-foreground/20"
                  )}
                />
              )}
            </button>
            {index < steps.length - 1 && (
              <div className="relative h-[1.5px] flex-1 mx-3">
                <div
                  className={cn(
                    "absolute inset-0",
                    isOrange ? "bg-gray-200" : "bg-border"
                  )}
                />
                <div
                  className={cn(
                    "absolute inset-0 transition-all duration-700 ease-out origin-left",
                    isAccented ? "bg-[#FF602D]/40" : "bg-foreground/30"
                  )}
                  style={{
                    transform: `scaleX(${index < currentStep ? 1 : 0})`,
                  }}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="space-y-8">
        <div
          key={currentStepData.id}
          className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-700"
        >
          <div className="flex items-baseline justify-between">
            <Label
              htmlFor={currentStepData.field}
              className={cn(
                "text-lg font-medium tracking-tight",
                isOrange ? "text-gray-900" : isModal ? "text-gray-900 dark:text-foreground" : ""
              )}
            >
              {currentStepData.label}
            </Label>
            <span
              className={cn(
                "text-xs font-medium tabular-nums",
                isOrange ? "text-gray-400" : isModal ? "text-gray-400 dark:text-muted-foreground/60" : "text-muted-foreground/60"
              )}
            >
              {currentStep + 1}/{steps.length}
            </span>
          </div>
          <div className="relative group">
            <Input
              id={currentStepData.field}
              type={currentStepData.field === "email" ? "email" : "text"}
              placeholder={currentStepData.placeholder}
              value={formData[currentStepData.field] || ""}
              onChange={(e) =>
                handleInputChange(currentStepData.field, e.target.value)
              }
              className={cn(
                "h-12 rounded-xl text-base transition-all duration-500 shadow-sm",
                isOrange
                  ? "border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-400 focus:border-[#FF602D]/40 focus:ring-[#FF602D]/10"
                  : isModal
                    ? "border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-400 focus:border-[#FF602D]/40 focus:ring-[#FF602D]/10 dark:border-border dark:bg-input/30 dark:text-foreground dark:placeholder:text-muted-foreground dark:focus:border-[#FF602D]/40 dark:focus:ring-[#FF602D]/10"
                    : "border-border focus:border-foreground/30 bg-card"
              )}
            />
          </div>
        </div>

        <Button
          onClick={handleNext}
          disabled={!formData[currentStepData.field]?.trim()}
          className={cn(
            "w-full h-12 group relative transition-all duration-300",
            isAccented
              ? "bg-[#FF602D] text-white hover:bg-[#D4501F] hover:shadow-lg hover:shadow-[#FF602D]/20 disabled:bg-gray-200 disabled:text-gray-400 dark:disabled:bg-muted dark:disabled:text-muted-foreground/60"
              : "hover:shadow-lg hover:shadow-foreground/5"
          )}
        >
          <span className="flex items-center justify-center gap-2 font-medium">
            {currentStep === steps.length - 1 ? "Complete" : "Continue"}
            <ArrowRightIcon
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5 duration-300"
              strokeWidth={2}
            />
          </span>
        </Button>

        {currentStep > 0 && (
          <button
            onClick={() => setCurrentStep(currentStep - 1)}
            className={cn(
              "w-full text-center text-sm transition-all duration-300",
              isOrange
                ? "text-gray-400 hover:text-gray-600"
                : isModal
                  ? "text-gray-400 hover:text-gray-600 dark:text-muted-foreground/60 dark:hover:text-foreground/80"
                  : "text-muted-foreground/60 hover:text-foreground/80"
            )}
          >
            Go back
          </button>
        )}
      </div>
    </div>
  );
}
