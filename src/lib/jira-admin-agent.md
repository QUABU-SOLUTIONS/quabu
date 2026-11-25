Keeping a Jira Cloud instance clean and agile is one of the biggest challenges for any administrator, especially after complex migrations or years of organic growth. The accumulation of redundant custom fields degrades performance and confuses users.

Atlassian has launched a new feature in **open beta** for **Jira Admin Agent**, specifically designed to identify, merge and delete duplicate or unused fields with complete safety and control.

## What Can Jira Admin Agent Do?

This update acts as an intelligent copilot for Jira administrators, guiding them step by step through the most delicate configuration maintenance tasks:

- **Intelligent merging of duplicate fields:** The agent automatically detects fields with identical or duplicate names (very common after migration processes). It analyzes the configuration, recommends which field to keep and, after your approval, transfers both the existing values and references to the primary field.
- **Deleting unused fields:** It identifies which fields are not adding value based on their actual usage history and explains why it recommends cleaning them up. For extra peace of mind, deleted fields go to the trash (*Deleted fields*), where they can be restored for up to **60 days**.
- **Impact analysis before changes:** Before making any modification, the agent generates a detailed report showing exactly which projects, issue types, JQL filters, workflows and dashboards will be affected by the change.

## Complete Safety: The Administrator Always Has the Final Say

One of the key points of this tool is that it **does not make changes autonomously**. Jira Admin Agent acts solely as an assistant for diagnostics and guided execution: no merge or deletion will take place until a Jira administrator reviews the impact analysis and explicitly approves the action plan.

## How to Try It

If you are already part of Atlassian's open beta program, you can start using Jira Admin Agent directly from the administration settings of your Jira Cloud environment.

**Need help auditing, cleaning up or restructuring your Jira instance?** At **Quabu**, we are experts in optimizing and governing Atlassian environments. [Contact our team](https://www.quabusolutions.com/contact?lang=en) and we will help you take your configuration to the next level.