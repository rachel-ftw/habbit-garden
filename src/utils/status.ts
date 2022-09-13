export const Status = {
  Init: "Init",
  Loading: "Loading",
  Loaded: "Loaded",
  Complete: "Complete",
  Inert: "Inert",
  Error: "Error",
};

const is = (status: any) => (val: any) => status === val;
export const isInit = is(Status.Init);
export const isLoading = is(Status.Loading);
export const hasLoaded = is(Status.Loaded);
export const isComplete = is(Status.Complete);
export const isInert = is(Status.Inert);
export const hasError = is(Status.Error);
