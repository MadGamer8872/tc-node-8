import { HomeView } from "../views/HomeView";
import { FilmsView } from "../views/FilmsView";
import { LocationsView } from "../views/LocationsView";
import { PeopleView } from "../views/PeopleView";
import { SpeciesView } from "../views/SpeciesView";
import { VehiclesView } from "../views/VehiclesView";
import { TemplateView } from "../views/TemplateView";

export const routes = [
  {
    path: "/",
    element: <HomeView />,
    title: "Home",
  },
  {
    path: "films",
    element: <FilmsView />,
    title: "Films",
  },
  {
    path: "locations",
    element: <LocationsView />,
    title: "Locations",
  },
  {
    path: "people",
    element: <PeopleView />,
    title: "People",
  },
  {
    path: "species",
    element: <SpeciesView />,
    title: "Species",
  },
  {
    path: "vehicles",
    element: <VehiclesView />,
    title: "Vehicles",
  },
  {
    path: "new",
    element: <TemplateView title="New View" />,
    title: "New",
  },
];
