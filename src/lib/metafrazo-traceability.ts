import sequence from "@/assets/metafrazo-sequence.png.asset.json";
import period from "@/assets/metafrazo-audit-period.png.asset.json";
import cases from "@/assets/metafrazo-audit-cases.png.asset.json";

export const metafrazoTraceabilityContent = `Three weeks before an audit, the same work begins in many teams. Someone opens old work items, copies histories into a document, takes screenshots of workflows, and writes alongside them why an approval was granted the way it was. It is tedious work, it is usually done by the most capable people on the team, and nobody believes it is a good use of their time.

What comes out of those three weeks is still not evidence. It is an account of the past, written in the present.

## Four security dimensions can be purchased. The fifth cannot.

Spain's Esquema Nacional de Seguridad, set out in Real Decreto 311/2022, is built around five security dimensions: confidentiality, integrity, availability, authenticity and traceability.

The first four have technology behind them. Encryption, access control, redundancy, signatures. You procure them, you configure them, and they take effect the moment they are switched on.

Traceability works differently. It comes into being while the work happens, or it never comes into being at all. After the fact it cannot be created, only asserted.

## The usual sources fail not because they are incomplete, but because they answer the wrong question

The common assumption is that the problem is volume. Not enough logged, retained too briefly, scattered across systems. So teams collect more.

The real problem is that the available sources answer a different question than the one being asked.

Permissions show who would have been allowed to act. The auditor asks who did. The current workflow shows how a process is meant to run. The auditor asks whether it was followed in this case. A work item shows its present state. The auditor asks how it got there.

The more of these sources you gather, the more complete the collection looks and the less it answers.

## An auditor's question is never about a single moment

Raúl Peláez Mendoza has spent years running large Atlassian environments under security, compliance and audit requirements. His experience shows how far the auditor's question reaches beyond what any single record can show:

> "One of the recurring challenges was that an auditor did not simply want to know who had access to Jira, Confluence or Bitbucket. They needed us to demonstrate who had access to what, which privileges they had, why those privileges were appropriate, how access had been granted or changed, and what had happened when an exception was identified. This became particularly complex in environments with internal employees, external users, outsourced teams [...] across different countries."
>
> **Raúl Peláez Mendoza**, Technical Director, Quabu

Every part of that question has a time dimension. Granted when, changed when, reviewed when, corrected when. A snapshot of today's configuration answers none of it.

![The same work item as a sequence of events](${sequence.url})

*The same work item, not as a state but as a sequence.*

## The audit period is exactly the period nobody was watching

Teams preparing an ENS audit describe the same shape: for systems in the higher categories (*media*, *alta*) the external audit runs on a two-year cycle, and what the auditor examines is the period between audits, not the state on the day. Which is precisely the two years during which nobody was thinking about the audit.

There is a second point that takes many private companies by surprise. Suppliers to the Spanish public administration increasingly report being asked to show ENS conformity as part of a tender. Whether ENS applies to a given company, and in which category, is a determination for its own compliance function.

Raúl sees the same principle at work across frameworks. From his experience with PCI DSS:

> "Although PCI DSS and ENS address different scopes and objectives, they share an important security principle: controls are much more valuable when they generate reliable evidence that can be reviewed and acted upon."

MetaFrazo counts a *bypass*, our own measurement rather than a finding, when a work item moves straight from a not-started status into a done one, with the steps in between never recorded.

![Traceability developments across an audit period](${period.url})

*Not an incident on one day, but a development across the audit period.*

## Where the evidence is created has already been decided

In regulated organizations, a large share of audit-relevant activity runs through Jira. Approvals, changes, handovers, exceptions. Not because Jira was designed for that, but because that is where the work happens.

That makes the workflow itself the source of evidence. Or, as Raúl puts it:

> "It is the accumulated history of access reviews, approvals, changes, investigations and corrective actions that ultimately allows an organisation to demonstrate that security is actually being managed over time."

## What MetaFrazo changes, and what it does not

The auditor's question reaches across Jira, Confluence, source code and identity systems. MetaFrazo answers the part that is created in Jira Cloud.

It records what happens there continuously, event by event. Not today's state, but the sequence that produced it.

The raw history is kept for as long as your subscription runs, rather than summarized away. An audit almost always brings a question nobody anticipated at setup time. Preserved events can answer it. Aggregated metrics cannot.

MetaFrazo identifies actors by their Atlassian account ID. The event records carry no display names or email addresses in their structured fields. What a user types into a summary or a comment is stored as Jira sent it.

![Audit cases without owners](${cases.url})

*The cases nobody owns when the auditor asks.*

And the limit that belongs to this subject: recording starts on the day it is switched on. Whatever happened before stays outside. Install today and face an audit in three months, and you have three months of evidence, not two years. No tool changes that, ours included.

## The decision sits as far ahead of the audit as the evidence period reaches back

The moment to act is not the audit announcement. Anyone who will be asked about two years in autumn 2028 is making that decision now.

Not because it is urgent, but because the evidence period only ever builds forwards.

If the period you will be asked about has already started, the recording is the part that has to begin now: [https://marketplace.atlassian.com/vendors/684225822/metafrazo](https://marketplace.atlassian.com/vendors/684225822/metafrazo)

*Originally published by [Maria Reisinger on the MetaFrazo blog](https://blog.metafrazo.cloud/blog/traceability-is-not-a-jira-problem).*
`;