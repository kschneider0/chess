"""add date_created to challenges

Revision ID: 7310b956a166
Revises: 956913c7a115
Create Date: 2023-04-13 08:10:43.640244

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '7310b956a166'
down_revision = '956913c7a115'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('challenges', schema=None) as batch_op:
        batch_op.add_column(sa.Column('date_created', sa.DateTime(), server_default=sa.text('(CURRENT_TIMESTAMP)'), nullable=True))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('challenges', schema=None) as batch_op:
        batch_op.drop_column('date_created')

    # ### end Alembic commands ###
