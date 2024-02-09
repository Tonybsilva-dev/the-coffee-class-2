export function WidgetMetric() {
  return (
    <>
      <div
        className="flex flex-col gap-4 rounded-md bg-red-50 px-4 py-5 dark:bg-zinc-800"
        role="region"
        aria-labelledby="widget-verification-email"
      >
        <div className="space-y-1">
          <span
            id="widget-metric-title"
            className="text-sm/5 font-medium text-red-600 dark:text-zinc-100"
          >
            Atenção!
          </span>
          <p className="text-sm/5 text-red-500 dark:text-zinc-400">
            Email não confirmado!
          </p>
        </div>
        <div className="h-2 rounded-full bg-red-100 dark:bg-zinc-600">
          <div className="h-2 w-5/5 rounded-full bg-red-600 dark:bg-red-400"></div>
        </div>

        {/* <div className="space-x-3">
              <Button
                variant="outline"
                type="button"
                className="text-sm font-medium text-red-500 hover:text-red-700 dark:text-red-300 dark:hover:text-red-200"
                onClick={mutate}
              >
                Revalidar{" "}
              </Button>
            </div> */}
      </div>
    </>
  );
}
