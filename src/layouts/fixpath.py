import os

# List of destination paths (each destination includes subdirectories and a folder name)
dest_paths = """
ethikos/dashboard-insights/real-time-overview
ethikos/dashboard-insights/trends-analytics
ethikos/dashboard-insights/participation-metrics
ethikos/debates-forums/active-debates
ethikos/debates-forums/start-new-debate
ethikos/debates-forums/featured-pinned-topics
ethikos/debates-forums/community-guidelines
ethikos/smart-voting/active-votes
ethikos/smart-voting/voting-history
ethikos/smart-voting/how-smart-vote-works
ethikos/reputation-badges/my-profile
ethikos/reputation-badges/manage-expertise
ethikos/reputation-badges/my-badges-achievements
konnected/dashboard
konnected/certifications/exam-preparation
konnected/certifications/exam-registration
konnected/certifications/exam-dashboard-results
konnected/certifications/certification-programs
konnected/learning-library/browse-resources
konnected/learning-library/recommended-resources
konnected/learning-library/search-filters
konnected/learning-library/offline-content
konnected/learning-paths/my-learning-path
konnected/learning-paths/create-learning-path
konnected/learning-paths/manage-existing-paths
konnected/teams-collaboration/my-teams
konnected/teams-collaboration/team-builder
konnected/teams-collaboration/activity-planner
konnected/teams-collaboration/project-workspaces
konnected/community-discussions/active-threads
konnected/community-discussions/start-new-discussion
konnected/community-discussions/moderation
keenkonnect/dashboard
keenkonnect/projects-collaboration/my-projects
keenkonnect/projects-collaboration/browse-projects
keenkonnect/projects-collaboration/create-new-project
keenkonnect/projects-collaboration/project-workspace
keenkonnect/knowledge-repository/browse-repository
keenkonnect/knowledge-repository/search-filter-documents
keenkonnect/knowledge-repository/upload-new-document
keenkonnect/knowledge-repository/document-management
keenkonnect/ai-team-matching/find-teams
keenkonnect/ai-team-matching/my-matches
keenkonnect/ai-team-matching/match-preferences
keenkonnect/interactive-workspaces/my-workspaces
keenkonnect/interactive-workspaces/browse-available-workspaces
keenkonnect/interactive-workspaces/launch-new-workspace
keenkonnect/sustainability-impact/track-project-impact
keenkonnect/sustainability-impact/sustainability-dashboard
keenkonnect/sustainability-impact/submit-impact-reports
keenkonnect/user-reputation-settings/view-reputation-ekoh
keenkonnect/user-reputation-settings/manage-expertise-areas
keenkonnect/user-reputation-settings/account-preferences
kreative/dashboard
kreative/creative-hub/explore-ideas
kreative/creative-hub/inspiration-gallery
kreative/creative-hub/submit-creative-work
kreative/idea-incubator/my-ideas
kreative/idea-incubator/create-new-idea
kreative/idea-incubator/collaborate-on-ideas
kreative/collaborative-spaces/my-spaces
kreative/collaborative-spaces/find-spaces
kreative/collaborative-spaces/start-new-space
kreative/community-showcases/featured-projects
kreative/community-showcases/top-creators
kreative/community-showcases/submit-to-showcase
ekoh/overview-analytics/current-ekoh-score
ekoh/overview-analytics/ekoh-explanation
ekoh/overview-analytics/analytics-trends
ekoh/voting-influence/current-voting-weight
ekoh/voting-influence/voting-history
ekoh/voting-influence/impact-analytics
ekoh/expertise-areas/view-current-expertise
ekoh/expertise-areas/add-remove-expertise
ekoh/achievements-badges/earned-badges-display
ekoh/achievements-badges/badge-progress-indicator
ekoh/achievements-badges/achievement-criteria
"""

# Convert the multi-line string into a list of paths (ignoring empty lines)
paths = [line.strip() for line in dest_paths.strip().splitlines() if line.strip()]

# Process each destination folder
for dest in paths:
    if not os.path.isdir(dest):
        print(f"Folder '{dest}' not found. Skipping this path.")
        continue

    print(f"Processing folder: '{dest}'")
    # Walk through the directory tree for each destination folder
    for root, dirs, files in os.walk(dest):
        for filename in files:
            if filename.endswith(".js"):
                file_path = os.path.join(root, filename)
                try:
                    with open(file_path, "r", encoding="utf-8") as f:
                        content = f.read()
                    
                    # Replace all occurrences of "dashboardk/" with the new destination path (ensuring a trailing slash)
                    updated_content = content.replace("dashboardk/", dest + "/")
                    
                    if updated_content != content:
                        with open(file_path, "w", encoding="utf-8") as f:
                            f.write(updated_content)
                        print(f"Updated '{file_path}'.")
                except Exception as e:
                    print(f"Failed to process '{file_path}': {e}")
