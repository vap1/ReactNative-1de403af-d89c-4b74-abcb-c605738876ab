
export interface Opportunity {
  opportunityId: string;
  leadId: string;
  assignedTo: string;
  status: string;
  notes: string;
  documents: string[];
}

export interface OpportunityDetails {
  // Define the fields for opportunity details here
}

export interface CreateOpportunityRequest {
  // Define the fields for creating an opportunity request here
}

export interface UpdateOpportunityRequest {
  // Define the fields for updating an opportunity request here
}

export interface OpportunityApiResponse {
  success: boolean;
  errorMessage?: string;
}